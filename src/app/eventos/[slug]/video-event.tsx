import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayIcon } from "lucide-react";

export default function VideoEvent({
  videoUrl,
  bgUrl,
}: {
  videoUrl: string;
  bgUrl: string;
}) {
  return (
    <div className="h-96 flex justify-center items-center relative">
      <img className="w-full h-full object-cover" src={bgUrl} alt="video" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur flex justify-center items-center">
        <Dialog>
          <DialogTrigger>
            <PlayIcon
              className="text-white size-20 hover:scale-125 transition-all"
              strokeWidth={1}
            />
          </DialogTrigger>
          <DialogContent className="max-w-7xl">
            <video width="100%" controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
