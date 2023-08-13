import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { substringText } from "../utils/textUtils";
export default function VideoPreviewCard({ videoInfo }) {
  if (!videoInfo) {
    return null;
  }

  return (
    <>
      <Link
        to={`/watch?v=${videoInfo?.id}`}
        className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 transition hover:opacity-90 cursor-pointer"
      >
        <img
          className="rounded-xl hover:rounded-none duration-500 m-auto w-full"
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
              {substringText(0, 55, videoInfo?.snippet?.localized?.title)}
            </h3>
            <p className="text-slate-600 text-sm font-normal">
              {videoInfo?.snippet?.channelTitle}
            </p>
            <div className="text-slate-600 text-sm font-normal">
              <span>
                {`${substringText(0, 3, videoInfo?.statistics?.viewCount)}`}K
                views
              </span>
              <span> &#x2022; </span>
              <span>2 months ago</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

VideoPreviewCard.propTypes = {
  videoInfo: PropTypes.object.isRequired,
};
