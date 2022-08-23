import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';


export const InfiniteScroller = () => {
  return (
    <></>
    // {!_.isEmpty(commentList) && commentList.docs.length > 0 && (
    //     <InfiniteScroll
    //       dataLength={commentList.docs.length}
    //       next={scrollMore}
    //       hasMore={commentList.docs.length < commentList.totalDocs}
    //       loader={<h4>Loading...</h4>}
    //       height={400}
    //     >
    //       {commentList.docs.length > 0 &&
    //         commentList.docs.map(comment => {
    //           return (
    //             <div className="CommentContainer mt_10 p_15" key={comment._id}>
    //               <Comment
    //                 comment={comment}
    //                 commentList={commentList}
    //                 commentProfileAvatarArray={commentProfileAvatarArray}
    //               />
    //               {(comment.documents.length > 0 ||
    //                 comment.images.length > 0) && (
    //                 <Row>
    //                   <>
    //                     {arrayOfAttachmentsWithSignInUrls(
    //                       comment.documents,
    //                       comment.images,
    //                       commentSignUrls,
    //                       companyId
    //                     ).map((attachment, index) => {
    //                       return (
    //                         <Attachment
    //                           key={uuid()}
    //                           attachments={attachment}
    //                           commentDataId={comment._id}
    //                           isOperationAllowed={isOperationAllowed}
    //                           docPermisions={documentPermissions}
    //                           currentAttachmentArray={plainArrOfAttachments(
    //                             comment.documents,
    //                             comment.images,
    //                             companyId
    //                           )}
    //                           documentsImagesForDelete={plainArrOfAttachments(
    //                             comment.documents,
    //                             comment.images,
    //                             companyId,
    //                             true
    //                           )}
    //                           handleSelectedImageThumbnail={
    //                             handleSelectedImageThumbnail
    //                           }
    //                           handleNextPreviousAction={
    //                             handleNextPreviousAction
    //                           }
    //                           actionItemAttachemntArray={
    //                             actionItemAttachemntArray
    //                           }
    //                           setRelevantQuestionId={setRelevantQuestionId}
    //                           imageList={imageList}
    //                           commentData={comment}
    //                           showPreview={showPreview}
    //                           setShowPreview={setShowPreview}
    //                           locationType={locationType}
    //                           hadleSelectedDownloadAttachments={
    //                             hadleSelectedDownloadAttachments
    //                           }
    //                           hadleSelectedDeleteAttachments={
    //                             hadleSelectedDeleteAttachments
    //                           }
    //                           selectedAttachmentObj={selectedAttachmentObj}
    //                           setOpenDownloadAttachmentsModal={
    //                             setOpenDownloadAttachmentsModal
    //                           }
    //                           isLargeAttachement={isLargeAttachement}
    //                         />
    //                       );
    //                     })}
    //                   </>
    //                 </Row>
    //               )}
    //             </div>
    //           );
    //         })}
    //     </InfiniteScroll>
    //   )}

  )
}
