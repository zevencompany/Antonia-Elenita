import React, { useState, useEffect, useRef } from 'react';
import {
  Camera,
  Upload,
  Sliders,
  RotateCw,
  RefreshCw,
  Trash2,
  Check,
  Move,
  Grid,
  ZoomIn,
} from 'lucide-react';

export interface PhotoFrameData {
  imageData: string; // compressed base64
  zoom: number; // 1 to 3
  panX: number; // px
  panY: number; // px
  rotate: number; // 0, 90, 180, 270
}

interface CustomPhotoFrameProps {
  storageKey: string;
  label: string;
  description?: string;
  containerClassName?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}

export const CustomPhotoFrame: React.FC<CustomPhotoFrameProps> = ({
  storageKey,
  label,
  description,
  containerClassName = '',
  imageClassName = '',
  children,
}) => {
  const [photoData, setPhotoData] = useState<PhotoFrameData | null>(null);
  const [isAdjusting, setIsAdjusting] = useState<boolean>(false);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [tempPan, setTempPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.imageData) {
          setPhotoData(parsed);
        }
      }
    } catch (e) {
      console.error('Erro ao carregar foto salva:', e);
    }
  }, [storageKey]);

  // Save to localStorage
  const saveToStorage = (data: PhotoFrameData | null) => {
    try {
      if (data) {
        localStorage.setItem(storageKey, JSON.stringify(data));
      } else {
        localStorage.removeItem(storageKey);
      }
    } catch (e) {
      console.error('Erro ao salvar foto no localStorage:', e);
    }
  };

  // Resize and compress image to avoid localStorage quota issues
  const processImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const maxDimension = 1600;
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.88);
          const initialData: PhotoFrameData = {
            imageData: compressedBase64,
            zoom: 1,
            panX: 0,
            panY: 0,
            rotate: 0,
          };
          setPhotoData(initialData);
          saveToStorage(initialData);
          setIsAdjusting(true); // Open adjustment mode immediately for user convenience
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoData(null);
    saveToStorage(null);
    setIsAdjusting(false);
  };

  const handleTriggerUpload = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    fileInputRef.current?.click();
  };

  // Drag and drop file support
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  // Adjustments handlers
  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!photoData) return;
    const newZoom = parseFloat(e.target.value);
    const updated = { ...photoData, zoom: newZoom };
    setPhotoData(updated);
    saveToStorage(updated);
  };

  const handleRotate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!photoData) return;
    const newRotate = (photoData.rotate + 90) % 360;
    const updated = { ...photoData, rotate: newRotate };
    setPhotoData(updated);
    saveToStorage(updated);
  };

  const handleCenter = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!photoData) return;
    const updated = { ...photoData, panX: 0, panY: 0 };
    setPhotoData(updated);
    saveToStorage(updated);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!photoData) return;
    const updated: PhotoFrameData = {
      ...photoData,
      zoom: 1,
      panX: 0,
      panY: 0,
      rotate: 0,
    };
    setPhotoData(updated);
    saveToStorage(updated);
  };

  // Dragging to pan logic
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isAdjusting && photoData) return;
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setTempPan({ x: photoData?.panX || 0, y: photoData?.panY || 0 });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !photoData) return;
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    const newPanX = Math.round(tempPan.x + deltaX);
    const newPanY = Math.round(tempPan.y + deltaY);

    setPhotoData((prev) => (prev ? { ...prev, panX: newPanX, panY: newPanY } : null));
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (_) {
      // Ignored
    }
    if (photoData) {
      saveToStorage(photoData);
    }
  };

  return (
    <div
      ref={frameRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative overflow-hidden group select-none ${containerClassName} ${
        isDragOver ? 'ring-4 ring-[#A8610D] ring-offset-2' : ''
      }`}
    >
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png, image/jpeg, image/webp"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload de foto da galeria"
      />

      {/* State 1: Photo is Loaded */}
      {photoData?.imageData ? (
        <div className="relative w-full h-full min-h-[inherit] flex items-center justify-center overflow-hidden">
          {/* Draggable & Transformable Image */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`w-full h-full flex items-center justify-center ${
              isAdjusting ? 'cursor-grab active:cursor-grabbing touch-none' : ''
            }`}
          >
            <img
              src={photoData.imageData}
              alt={label}
              draggable={false}
              style={{
                transform: `translate(${photoData.panX}px, ${photoData.panY}px) scale(${photoData.zoom}) rotate(${photoData.rotate}deg)`,
                transformOrigin: 'center center',
                transition: isDragging ? 'none' : 'transform 150ms ease-out',
              }}
              className={`w-full h-full object-cover max-w-none pointer-events-none select-none ${imageClassName}`}
            />
          </div>

          {/* Gentle vignette overlay for subtle contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,16,15,0.32)] via-transparent to-[rgba(17,16,15,0.04)] pointer-events-none" />

          {/* Composition Grid (Rule-of-thirds) in adjust mode */}
          {isAdjusting && showGrid && (
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none z-20">
              <div className="border-r border-b border-white/40 shadow-xs" />
              <div className="border-r border-b border-white/40 shadow-xs" />
              <div className="border-b border-white/40 shadow-xs" />
              <div className="border-r border-b border-white/40 shadow-xs" />
              <div className="border-r border-b border-white/40 shadow-xs" />
              <div className="border-b border-white/40 shadow-xs" />
              <div className="border-r border-b border-white/40 shadow-xs" />
              <div className="border-r border-b border-white/40 shadow-xs" />
              <div />
            </div>
          )}

          {/* Top Floating Action Bar (When NOT adjusting) */}
          {!isAdjusting && (
            <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 p-1 rounded-full bg-[#FCFBF9]/90 backdrop-blur-md border border-[rgba(60,45,30,0.12)] shadow-[0_4px_16px_rgba(40,25,10,0.15)] transition-opacity duration-200">
              <button
                type="button"
                onClick={() => setIsAdjusting(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#11100F] hover:bg-[#A8610D] hover:text-[#FCFBF9] transition-colors cursor-pointer"
                title="Ajustar zoom, enquadramento e posição"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Ajustar</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleTriggerUpload(e)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#11100F] hover:bg-[#A8610D] hover:text-[#FCFBF9] transition-colors cursor-pointer"
                title="Trocar foto por outra da galeria"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Trocar</span>
              </button>

              <button
                type="button"
                onClick={handleRemovePhoto}
                className="p-1.5 rounded-full text-[#716C66] hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
                title="Remover foto"
                aria-label="Remover foto"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Floating Adjustment Panel (When IN adjust mode) */}
          {isAdjusting && (
            <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 z-30 p-4 sm:p-5 rounded-[20px] bg-[#FCFBF9]/95 backdrop-blur-md border border-[rgba(60,45,30,0.14)] shadow-[0_12px_36px_rgba(30,20,10,0.22)] animate-in fade-in slide-in-from-bottom-2 duration-200">
              {/* Top Hint Bar */}
              <div className="flex items-center justify-between mb-3 text-xs text-[#55514D]">
                <div className="flex items-center gap-1.5 font-medium text-[#11100F]">
                  <Move className="w-3.5 h-3.5 text-[#A8610D]" />
                  <span>Arraste na foto para mover o enquadramento</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowGrid(!showGrid)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors cursor-pointer ${
                    showGrid
                      ? 'bg-[#A8610D] text-white border-[#A8610D]'
                      : 'bg-white text-[#716C66] border-[rgba(60,45,30,0.12)]'
                  }`}
                  title="Ativar/desativar grade de auxílio"
                >
                  <Grid className="w-3 h-3" />
                  <span>Grade</span>
                </button>
              </div>

              {/* Zoom Slider Control */}
              <div className="flex items-center gap-3 mb-4">
                <ZoomIn className="w-4 h-4 text-[#A8610D] shrink-0" />
                <span className="text-xs text-[#55514D] shrink-0 font-medium">Zoom:</span>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.02"
                  value={photoData.zoom}
                  onChange={handleZoomChange}
                  className="w-full h-1.5 bg-[#E8D8C5] rounded-lg appearance-none cursor-pointer accent-[#A8610D]"
                  aria-label="Controle de zoom da imagem"
                />
                <span className="text-xs font-mono tabular-nums text-[#11100F] w-12 text-right">
                  {Math.round(photoData.zoom * 100)}%
                </span>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[rgba(60,45,30,0.08)]">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleRotate}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-[#11100F] bg-[#F7F5F1] hover:bg-[#E8D8C5] border border-[rgba(60,45,30,0.08)] transition-colors cursor-pointer"
                    title="Girar 90 graus"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Girar 90°</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCenter}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-[#11100F] bg-[#F7F5F1] hover:bg-[#E8D8C5] border border-[rgba(60,45,30,0.08)] transition-colors cursor-pointer"
                    title="Centralizar posição"
                  >
                    Centralizar
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-[#716C66] hover:text-[#11100F] transition-colors cursor-pointer"
                    title="Redefinir enquadramento"
                  >
                    Redefinir
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAdjusting(false)}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-[#FCFBF9] bg-[#A8610D] hover:bg-[#92530A] shadow-sm transition-all cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Concluir</span>
                </button>
              </div>
            </div>
          )}

          {/* Additional children overlay (like floating badge or tags) */}
          {children}
        </div>
      ) : (
        /* State 2: Empty Frame / Upload Area */
        <div
          onClick={(e) => handleTriggerUpload(e)}
          className="relative w-full h-full min-h-[480px] flex flex-col items-center justify-center p-8 sm:p-10 text-center cursor-pointer bg-gradient-to-b from-[#FAF8F5] to-[#F3EEE7] border-2 border-dashed border-[rgba(168,97,13,0.3)] hover:border-[#A8610D] rounded-[inherit] transition-all duration-300 group/upload"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleTriggerUpload();
            }
          }}
          aria-label={`Carregar foto para ${label}`}
        >
          {/* Subtle Warm Icon Container */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FCFBF9] border border-[rgba(168,97,13,0.2)] shadow-[0_4px_16px_rgba(168,97,13,0.08)] flex items-center justify-center text-[#A8610D] mb-5 transition-transform duration-300 group-hover/upload:scale-105 group-hover/upload:border-[#A8610D]">
            <Camera className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.6]" />
          </div>

          <span className="text-[13px] font-medium text-[#A8610D] uppercase tracking-wider block mb-2">
            Galeria de Fotos
          </span>

          <h3 className="text-[20px] sm:text-[23px] font-normal text-[#11100F] tracking-tight mb-2">
            {label}
          </h3>

          <p className="text-[14px] text-[#55514D] max-w-[320px] leading-[1.5] mb-6">
            {description ||
              'Toque ou clique para selecionar uma foto do seu celular ou computador (PNG, JPG ou WEBP).'}
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A8610D] text-white text-xs font-medium shadow-[0_4px_14px_rgba(168,97,13,0.22)] transition-transform duration-200 group-hover/upload:-translate-y-0.5">
            <Upload className="w-3.5 h-3.5 stroke-[2.2]" />
            <span>Selecionar da Galeria</span>
          </div>

          <span className="text-[11.5px] text-[#716C66] mt-4">
            Você poderá mover, dar zoom e cortar após escolher
          </span>

          {/* Children still render if needed */}
          {children}
        </div>
      )}
    </div>
  );
};
