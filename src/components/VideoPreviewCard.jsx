export default function VideoPreviewCard() {
  return (
    <>
      <div className="col-span-12 md:col-span-4 cursor-pointer">
        <img
          className="rounded-xl h-52 m-auto"
          src="https://i.ytimg.com/vi/NuB3ZAFku1o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlZybvPaJJiGxYxycHPfA8DMJm5Q"
          alt="Javascript_Image"
        />
        <div className="grid grid-cols-12 mt-3 w-96">
          <div className="col-span-2 flex justify-center">
            <img
              className="h-10 rounded-full"
              src="https://yt3.ggpht.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s68-c-k-c0x00ffffff-no-rj"
              alt="channel logo"
            />
          </div>
          <div className="col-span-10 font-medium leading-6 overflow-hidden whitespace-normal pr-7">
            <h3 className="max-h-[53px]">
              Expert Roadmap for Front-end developers | Tanay Pratap Hindi
            </h3>
            <a className="text-slate-600 text-sm font-normal"> Tanay Pratap</a>
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
