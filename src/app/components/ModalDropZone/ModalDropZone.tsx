import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './ModalDropZone.scss';
import Image from 'next/image';
// import { postCatImage } from '@/app/API/api';
// import Loader from '../Loader/Loader';

export default function ModalDropZone() {
   const [files, setFiles] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isApproved, setIsApproved] = useState(0);
   const { getRootProps, getInputProps } = useDropzone({
      accept: {
         'image/jpeg': [],
         'image/png': [],
      },
      onDrop: (acceptedFiles) => {
         setFiles(
            acceptedFiles.map((file) =>
               Object.assign(file, {
                  preview: URL.createObjectURL(file),
               })
            )
         );
      },
   });

   const thumbs = files.map((file) => (
      <div
         key={file.name}
         className="drop-zone__image-thumb"
      >
         <Image
            src={file.preview}
            onLoad={() => {
               URL.revokeObjectURL(file.preview);
            }}
            alt="user picture"
            width={560}
            height={280}
         />
      </div>
   ));

   const onClick = useCallback(async () => {
      const formData = new FormData();
      formData.append('file', files[0]);
      setIsApproved(0);

      setIsLoading(true);
      try {
          // await postCatImage(formData);
         setFiles([]);
         setIsApproved(1);
      } catch (error) {
         setIsApproved(-1);

      } finally {
         setIsLoading(false);
      }
   }, [files]);

   return (
      <>
         <div className="drop-zone">
            <div {...getRootProps()}>
               <input {...getInputProps()} />

               <div className={`drop-zone__box ${isApproved === -1 && "failed"}`}>
                  {thumbs.length > 0 ? (
                     thumbs
                  ) : (
                     <p>
                        <span>Drag here </span> your file or <span> Click here </span> to
                        upload
                     </p>
                  )}
               </div>
            </div>
            <p className="drop-zone__file">
               {files.length > 0
                  ? `Image File Name: ${files[0].path}`
                  : 'No files selected'}
            </p>
         </div>
         {files.length > 0 && (
            <button
               className="upload-photo"
               onClick={onClick}
            >
               <span>
                  {/* // {isLoading && (
                  //    <Loader
                  //       width={16}
                  //       height={16}
                  //    />
                  // )} */}
                  upload photo
               </span>
            </button>
         )}
         {isApproved === 1 && (
            <p className="drop-zone__message">
               <svg width="20" height="18" className="cat-item__btn--icon">
          <use href="/symbol-defs.svg#icon-fav-20"></use>
        </svg>
               Thanks for the Upload - Cat found!
            </p>
         )}

         {isApproved === -1 && (
            <p className="drop-zone__message">
               <svg width="20" height="18" className="cat-item__btn--icon">
          <use href="/symbol-defs.svg#icon-fav-20"></use>
        </svg>
               No Cat found - try a different one
            </p>
         )}
      </>
   );
}