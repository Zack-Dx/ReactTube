export default function VideoPreviewCard() {
  return (
    <>
      <div className="col-span-12 md:col-span-4 cursor-pointer">
        <img className="rounded-xl h-52 m-auto" src="" alt="thumbnail" />
        <div className="grid grid-cols-12 mt-3">
          <div className="col-span-2 flex justify-center">
            <img className="h-10 rounded-full" src="" alt="channel_logo" />
          </div>
          <div className="col-span-10 font-medium leading-6 overflow-hidden whitespace-normal pr-7">
            <h3 className="max-h-[53px]">Video Title</h3>
            <a className="text-slate-600 text-sm font-normal">Channel Name</a>
            <div className="text-slate-600 text-sm font-normal">
              <span>152K views</span>
              <span> &#x2022; </span>
              <span>2 months ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
