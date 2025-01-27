import PlaylistResponse from "./PlaylistResponse";
import React from "react";


const StackedList = ({playlist}) => {
    try{
        return (
            <ul role="list" className="divide-y divide-gray-100">
              {playlist.map((playlist) => (
                <li key={playlist.id} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <img alt="" src={playlist.images[0].url} className="size-48 flex-shrink full bg-gray-50" />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm/6 font-semibold text-white-900">{playlist.name}</p>
                      <p className="mt-1 truncate text-xs/5 text-gray-500">{playlist.description}</p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm/6 text-gray-900">{playlist.name}</p>
                    {playlist.name ? (
                      <p className="mt-1 text-xs/5 text-gray-500">
                        //Last seen <time dateTime={playlist.lastSeenDateTime}>{playlist.lastSeen}</time>
                      </p>
                    ) : (
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="size-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs/5 text-gray-500">Online</p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )
    } catch (error) {
        console.log(error);
    }
  }

export default StackedList