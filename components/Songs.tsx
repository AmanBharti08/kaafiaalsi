"use client";

import Image from "next/image";
import { useState } from "react";

import SingleCard from "./SingleCard"

export default function () {
  const [openSingle, setOpenSingle] = useState(true);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [openEp, setOpenEp] = useState(false);
  const [openCollab, setOpenCollab] = useState(false);

  function single() {
    setOpenSingle(true);
    setOpenAlbum(false);
    setOpenEp(false);
    setOpenCollab(false);
  }

  function album() {
    setOpenSingle(false);
    setOpenAlbum(true);
    setOpenEp(false);
    setOpenCollab(false);
  }

  function ep() {
    setOpenSingle(false);
    setOpenAlbum(false);
    setOpenEp(true);
    setOpenCollab(false);
  }

  function collab() {
    setOpenSingle(false);
    setOpenAlbum(false);
    setOpenEp(false);
    setOpenCollab(true);
  }

  function openSingles(){

  }

  const songs = [
    {
      name: "10000 Days",
      album_art: "/10000days.png",
      shadow: "shadow-white",
    },
    {
      name: "Be Humble",
      album_art: "/behumble.webp",
      shadow: "shadow-blue-300",
    },
    {
      name: "Suno",
      album_art: "/suno.jpeg",
      shadow: "shadow-red-400",
    },
  ];

  const albums = [
    {
      name: "LoverBoy",
      album_art:
        "/loverboy.jpeg",
      songs: ["intro", "1", "2", "3", "4", "5", "6", "7", "8"],
    },
    {
      name: "If God Was Real, I Wouldn't Be Here.",
      album_art:
        "/loverboy.jpeg",
      songs: ["intro", "1", "2", "3", "4", "5", "6", "7", "8"],
    },
  ];

  const eps = [
    {
      name: "Kal Aur",
      album_art:
        "https://i.scdn.co/image/ab67616d0000b273e1c8a9f2c5e7b1a3c8e8f4",
      songs: ["Khwaab Asal", "Kaifi Adaa", "Kohli Andaaz", "Khuli Aankh"],
    },
  ];

  const collabs = [
    {
      name: "Tuna Fry",
      with: "Aao Faso",
      album_art:
        "https://i.scdn.co/image/ab67616d0000b273e1c8a9f2c5e7b1a3c8e8f4",
    },
    {
      name: "Keechar",
      with: "Khooni Kala (KK)",
      album_art:
        "https://i.scdn.co/image/ab67616d0000b273e1c8a9f2c5e7b1a3c8e8f4",
    },
    {
      name: "What Matters",
      with: "Aao Faso",
      album_art:
        "https://i.scdn.co/image/ab67616d0000b273e1c8a9f2c5e7b1a3c8e8f4",
    },
    {
      name: "Ankahi Baate",
      with: "Aao Faso, Khooni Kala (KK)",
      album_art:
        "https://i.scdn.co/image/ab67616d0000b273e1c8a9f2c5e7b1a3c8e8f4",
    },
    {
      name: "Pyaar ?",
      with: "Lakshay",
      album_art:
        "https://i.scdn.co/image/ab67616d0000b273e1c8a9f2c5e7b1a3c8e8f4",
    },
  ];

  return (
    <div className="flex flex-col lg:gap-30 gap-10 items-center  w-full lg:p-10 p-2">
      <div className="flex justify-center  items-center w-full">
        <h1
          className={`font-bold text-center  mt-10 tracking-wider transition-all duration-400 cursor-pointer border-r border-r-gray-100 px-5 ${
            openSingle
              ? "lg:text-5xl text-xl text-amber-100"
              : "text-gray-200 lg:text-2xl text-md hover:text-4xl"
          }`}
          onClick={() => single()}
        >
          SINGLES
        </h1>
        <h1
          className={`font-bold text-center  mt-10 tracking-wider transition-all duration-400 cursor-pointer border-r border-r-gray-100 px-5 ${
            openAlbum
              ? "lg:text-5xl text-xl text-amber-100"
              : "text-gray-200 lg:text-2xl text-md hover:text-4xl"
          }`}
          onClick={() => album()}
        >
          ALBUMS
        </h1>
        <h1
          className={`font-bold text-center  mt-10 tracking-wider transition-all duration-400 cursor-pointer border-r border-r-gray-100 px-5 ${
            openEp
              ? "lg:text-5xl text-xl text-amber-100"
              : "text-gray-200 lg:text-2xl text-md hover:text-4xl"
          }`}
          onClick={() => ep()}
        >
          EPS
        </h1>
        <h1
          className={`font-bold text-center  mt-10 tracking-wider transition-all duration-400 cursor-pointer px-5 ${
            openCollab
              ? "lg:text-5xl text-xl text-amber-100"
              : "text-gray-200 lg:text-2xl text-md hhover:text-4xl"
          }`}
          onClick={() => collab()}
        >
          COLLABS
        </h1>
      </div>
      <div>
        <div
          className={`${openSingle ? "w-full  flex lg:gap-20  items-center justify-center" : "hidden"}`}
        >
          {songs.map((song, index) => {
            return (
              <div
                key={index}
                className={`p-5`}
                onClick={()=>openSingles()}
              >
                <SingleCard song={song}/>
              </div>
            );
          })}
          {

          }
        </div>
        <div
          className={`${openAlbum ? "w-full  flex gap-10 justify-center" : "hidden"}`}
        >
          {albums.map((album, index) => {
            return <div key={index} className="p-5">

            </div>;
          })}
        </div>
        <div
          className={`${openEp ? "w-full  flex gap-10 justify-center" : "hidden"}`}
        ></div>
        <div
          className={`${openCollab ? "w-full  flex gap-10 justify-center" : "hidden"}`}
        ></div>
      </div>
    </div>
  );
}
