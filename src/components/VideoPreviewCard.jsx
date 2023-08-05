import PropTypes from "prop-types";
export default function VideoPreviewCard({ videoInfo }) {
  console.log(videoInfo);
  return (
    <>
      <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 cursor-pointer">
        <img
          className="rounded-xl m-auto w-full"
          src={videoInfo?.snippet?.thumbnails?.medium?.url}
          alt={videoInfo?.snippet?.title}
        />
        <div className="grid grid-cols-12 mt-3">
          <div className="col-span-2 flex justify-center mr-3">
            <img
              className="h-10 rounded-full"
              width={43}
              src={videoInfo?.snippet?.thumbnails?.medium?.url}
              alt={videoInfo?.snippet?.title}
            />
          </div>
          <div className="col-span-10 font-medium leading-6 overflow-hidden whitespace-normal">
            <h3 className="max-h-[53px]">
              {videoInfo?.snippet?.localized?.title?.slice(0, 55)}
            </h3>
            <a className="text-slate-600 text-sm font-normal">
              {videoInfo?.snippet?.channelTitle}
            </a>
            <div className="text-slate-600 text-sm font-normal">
              <span>
                {`${videoInfo?.statistics?.viewCount?.slice(0, 3)}`}K views
              </span>
              <span> &#x2022; </span>
              <span>2 months ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

VideoPreviewCard.propTypes = {
  videoInfo: PropTypes.object.isRequired,
};
