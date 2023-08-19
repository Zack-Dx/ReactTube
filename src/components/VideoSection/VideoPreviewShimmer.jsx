export function VideoPreviewShimmer() {
  return (
    <>
      <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 transition hover:opacity-90 cursor-pointer animate-pulse">
        <div className="rounded-xl bg-gray-300 h-40 w-full"></div>
        <div className="grid grid-cols-12 mt-3">
          <div className="col-span-2 flex justify-center mr-3">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="col-span-10 font-medium leading-6 overflow-hidden whitespace-normal">
            <div className="max-h-[53px] bg-gray-300 h-4 w-4/5 mb-1"></div>
            <div className="text-slate-600 text-sm font-normal bg-gray-300 h-4 w-1/2 mb-1"></div>
            <div className="text-slate-600 text-sm font-normal bg-gray-300 h-4 w-2/3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
