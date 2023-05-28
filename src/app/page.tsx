'use client'
import { Home as HomeIcon, Search, Library, ArrowRight, Plus, ChevronDown, Heart, PinIcon, Mic2, MonitorSpeaker, Volume2, ListMusic, Pause, SkipBack, SkipForward, Shuffle, Repeat2, ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';

import { Tooltip } from '@chakra-ui/react'
import Image from 'next/image';
import VolumeSlider from './components/volumeslider';
import CustomToolTip from './components/customtooltip';


export default function Home() {
  return (
    <div className="h-screen flex flex-col box-border">
      <div className="flex flex-1">
        <div className="flex flex-col grid-col-2 font-semibold">
          <aside className="w-84 bg-spotify-gray rounded-lg ml-2 mt-2 flex-grow px-5 py-4">
            <nav className='flex flex-col gap-5 text-spotify'>
              <a href="" className='flex gap-4 items-center hover:text-zinc-100 transition-all'>
                <HomeIcon/>
                Home
              </a>
              <a href="" className='flex gap-4 items-center hover:text-zinc-100 transition-all'>
                <Search/>
                Search
              </a>
            </nav>
          </aside>
          <aside className="w-84 bg-spotify-gray rounded-lg ml-2 mt-2 flex-grow h-full">
            <nav className='flex flex-col gap-4 p-2 relative'>
              <div className='flex items-center gap-2 p-2 text-spotify'>
                <Tooltip label='Collapse Your Library' placement='top' bg='neutral.750' borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                  <a href="" className='flex gap-1.5 items-center hover:text-zinc-100 transition-all'>
                    <Library/>
                      Your Library
                  </a>
                </Tooltip>
              </div>
              <div className='flex p-1 gap-1 ml-auto self-end absolute items-center content-center justify-center text-spotify'>
                <a href="" className='hover:text-zinc-200 hover:bg-neutral-600/20 rounded-full p-1.5 transition-all'>
                  <Tooltip label='Create playlist our folder' placement='top' bg='neutral.700' fontWeight={400} fontSize={14} borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                    <Plus size={20}/>
                  </Tooltip>
                </a>
                <a href="" className='hover:text-zinc-200 hover:bg-neutral-600/20 rounded-full p-1.5 transition-all'>
                  <Tooltip label='Enlarge Your Library' placement='top' bg='neutral.700' fontWeight={400} fontSize={14} borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                    <ArrowRight size={20}/>
                  </Tooltip>
                </a>
              </div>
              <div className='flex gap-2 font-normal text-sm px-2'>
                <a href="" className='bg-neutral-800 rounded-full py-1.5 px-3 hover:bg-neutral-700 transition-all'>
                  Playlist
                </a>
                <a href="" className='bg-neutral-800 rounded-full py-1.5 px-3 hover:bg-neutral-700 transition-all'>
                  Albums
                </a>
                <a href="" className='bg-neutral-800 rounded-full py-1.5 px-3 hover:bg-neutral-700 transition-all'>
                  Artists
                </a>
              </div>
              <div className='text-sm font-semibold text-spotify flex justify-between px-2'>
                <div className='flex items-center hover:cursor-pointer'>
                  <a href="" className='flex hover:text-zinc-200 hover:bg-neutral-600/20 hover:rounded-full p-1.5 transition-all absolute'>
                    <Tooltip label='Search in Your Library' placement='top' bg='neutral.700' fontWeight={400} fontSize={14} borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                      <Search size={18}/>
                    </Tooltip>
                  </a>
                </div>
                <p className='flex items-center gap-1 hover:text-zinc-100 transition-all cursor-pointer'>
                  Recentes
                  <ChevronDown fill="lightgray" size={20} strokeWidth={0}/>
                </p>
              </div>
              <div className='flex flex-col box-border gap-0.5 text-base font-normal'>
                <div className='group-playlist flex gap-3 items-center hover:bg-neutral-900 rounded-md p-2 cursor-pointer'>
                  <button className='flex justify-center items-center rounded-m w-13 h-13 bg-gradient-to-tl from-neutral-300 via-blue-900 to-blue-800 text-white'>
                    <Heart fill="white" size={20} strokeWidth={0}/>
                  </button>
                  <div className='flex flex-1 flex-col gap-1'>
                    <p className=''>Liked Songs</p>
                    <div className='flex flex-row items-center gap-1'>
                      <PinIcon size={16} color='lightgreen' fill='lightgreen'/>
                      <span className='text-sm text-zinc-400'>Playlist • 240 music</span>
                    </div>
                  </div>
                </div>
                <div className='group-playlist flex gap-3 items-center hover:bg-neutral-900 rounded-md p-2 cursor-pointer'>
                  <button className='flex justify-center items-center rounded-m w-13 h-13 overflow-hidden text-white'>
                    <Image src={'https://i.ibb.co/ZffxYKk/uicideboy-x-black-smurf-album-davis-owen.jpg'} alt='album' width={80} height={80} />
                    <Heart fill="white" size={20} strokeWidth={0}/>
                  </button>
                  <div className='flex flex-1 flex-col gap-1'>
                    <p className=''>Vibing Hard</p>
                    <div className='flex flex-row items-center gap-1'>
                      <span className='text-sm text-zinc-400'>Playlist • lucaS</span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </aside>
        </div>
        <main className="flex-1 bg-spotify-gray rounded-lg mx-2 mt-2 py-4 px-6 relative overflow-auto">
          <div className='flex flex-1 space-x-3 lg:space-x-1 justify-between pb-4 relative'>
            <div className='flex-row flex gap-2'>
              <button className='flex justify-center items-center bg-black text-spotify bg-opacity-30 rounded-full w-9 h-9 cursor-not-allowed'>
                  <ChevronLeft size={25} strokeWidth={1.2} className=''/>
              </button>
              <button className='flex justify-center items-center bg-black text-spotify bg-opacity-30 rounded-full w-9 h-9 cursor-not-allowed'>
                  <ChevronRight size={25} strokeWidth={1.2} className=''/>
              </button>
            </div>

            <button className='flex justify-center items-center content-end bg-black text-spotify bg-opacity-30 rounded-full p-2 w-9 h-9 hover:scale-105 hover:bg-opacity-80'>
              <CustomToolTip/>
            </button>
          </div>

          <div className='overflow-y-auto absolute'>
            <div className='top-playlist flex w-4/5 m-auto bg-gradient-to-tr from-black to-transparent rounded-md '>
              <div className='flex px-4 pt-5 lg:pt-2 pb-3 gap-4 justify-center'>
                <Image src={'https://i.ibb.co/VHDnVbM/Album-Suicideboys-And-Shakewell-Shameless-Suicide.jpg'} alt='album' width={200} height={200} quality={100} className='my-auto'/>
                <div className='flex flex-col gap-4 justify-center '>
                  <p className='font-bold text-xs flex'>PLAYLIST</p>
                  <h1 className='font-bold text-6xl w-auto h-36 hover:underline cursor-pointer overflow-hidden overflow-ellipsis'>Best EmoRap Playlists | Most Played | Emo Songs | Top 100 Songs Top 100 Songs</h1>
                  <p>Listen the best Emo Rap on Spotify! Hits of $uicideboy$, LilPeep, BONES and moreBONES and more.</p>
                  <div className='buttonsxd flex gap-5 items-center transition-all'>
                    <button className='flex w-24 h-12 py-5 px-6 items-center justify-center rounded-full text-black font-semibold bg-green-600 hover:scale-105'>Play</button>
                    <button className='flex w-24 h-12 py-5 px-6 items-center justify-center rounded-full font-semibold border border-neutral-400 hover:scale-105'>Follow</button>
                    <Tooltip label='More' placement='top' bg='neutral.700' fontWeight={400} fontSize={14} borderRadius={3} paddingX={2} paddingY={1} openDelay={300}color='white'>
                      <MoreHorizontal color='lightgray' strokeWidth={2} width={24} className='ml-2'/>
                    </Tooltip>

                  </div>
                </div>
              </div>
            </div>

            <h1 className='font-bold text-3xl py-3'>Good aftermoon</h1>
              <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-flow-row gap-x-7 gap-y-4 lg:gap-x-4 lg:gap-y-3'>
                <div className='w-auto bg-neutral-800 overflow-hidden rounded-md'>
                  <Image src={'https://i.ibb.co/VHDnVbM/Album-Suicideboys-And-Shakewell-Shameless-Suicide.jpg'} alt='album' width={80} height={80} quality={100}/>
                </div>
                <div className='w-auto bg-neutral-800 overflow-hidden rounded-md'>
                  <Image src={'https://i.ibb.co/VHDnVbM/Album-Suicideboys-And-Shakewell-Shameless-Suicide.jpg'} alt='album' width={80} height={80} quality={100}/>
                </div>
                <div className='w-auto bg-neutral-800 overflow-hidden rounded-md'>
                  <Image src={'https://i.ibb.co/VHDnVbM/Album-Suicideboys-And-Shakewell-Shameless-Suicide.jpg'} alt='album' width={80} height={80} quality={100}/>
                </div>
                <div className='w-auto bg-neutral-800 overflow-hidden rounded-md'>
                  <Image src={'https://i.ibb.co/VHDnVbM/Album-Suicideboys-And-Shakewell-Shameless-Suicide.jpg'} alt='album' width={80} height={80} quality={100}/>
                </div>
                <div className='w-auto bg-neutral-800 overflow-hidden rounded-md'>
                  <Image src={'https://i.ibb.co/VHDnVbM/Album-Suicideboys-And-Shakewell-Shameless-Suicide.jpg'} alt='album' width={80} height={80} quality={100}/>
                </div>
                <div className='w-auto bg-neutral-800 overflow-hidden rounded-md'>
                  <Image src={'https://i.ibb.co/VHDnVbM/Album-Suicideboys-And-Shakewell-Shameless-Suicide.jpg'} alt='album' width={80} height={80} quality={100}/>
                </div>
                <div className='w-auto bg-neutral-800 overflow-hidden rounded-md'>
                  <Image src={'https://i.ibb.co/VHDnVbM/Album-Suicideboys-And-Shakewell-Shameless-Suicide.jpg'} alt='album' width={80} height={80} quality={100}/>
                </div>
                <div className='w-auto bg-neutral-800 overflow-hidden rounded-md'>
                  <Image src={'https://i.ibb.co/VHDnVbM/Album-Suicideboys-And-Shakewell-Shameless-Suicide.jpg'} alt='album' width={80} height={80} quality={100}/>
                </div>
              </div>
          </div>

          



        </main>
      </div>
      <footer className="h-24 p-4 flex w-auto justify-between content-between">
        <div className='music-playing flex'>
          <div className='flex gap-4 justify-center items-center'>
            <Image src="https://i.ibb.co/277Zj3m/94995ba357b655e67cc6301133b6e928-600x600x1.jpg" alt="Spotify Logo" width={600} height={600} className='w-15 h-15 rounded-m hover:cursor-pointer'/>
            <div className='flex flex-col gap-0.5 justify-center'>
              <p className='text-xs md:text-sm hover:cursor-pointer hover:underline'>Again & Again</p>
              <span className='text-xs text-spotify hover:cursor-pointer hover:underline hover:text-white'>Jryl</span>
            </div>
            <span className='flex ml-1 items-center justify-center text-spotify hover:text-white transition-all duration-200'>
              <Tooltip label='Save to Your Library' bg='neutral.700' fontWeight={400} fontSize={14} borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                <Heart width={18}/>
              </Tooltip>
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='icons-media flex gap-3 text-spotify cursor-pointer items-center md:gap-6'>
            <span className='hover:text-white transition-all'>
              <Tooltip label='Enable shuffle' bg='neutral.700' fontWeight={400} fontSize={14} placement='top' borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                <Shuffle width={17}/>
              </Tooltip>
            </span>
            <span className='hover:text-white transition-all'>
              <Tooltip label='Previous' bg='neutral.700' fontWeight={400} fontSize={14} placement='top' borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                <SkipBack width={21} fill='lightgray' stroke='lightgray' strokeWidth={2.7} strokeLinecap='butt' className='hover:text-white'/>
              </Tooltip>
            </span>
            <span className='inline-flex items-center justify-center transition-all p-1 bg-white rounded-full text-sm hover:scale-110'>
              <Tooltip label='Pause' bg='neutral.700' fontWeight={400} fontSize={14} placement='top' borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                <Pause fill='black' stroke='black' strokeWidth={0.7}/>
              </Tooltip>
            </span>
            <span className='hover:text-white transition-all'>
              <Tooltip label='Skip' bg='neutral.700' fontWeight={400} fontSize={14} placement='top' borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                <SkipForward width={21} fill='lightgray' stroke='lightgray' strokeWidth={2.7} strokeLinecap='butt' className='hover:text-white'/>
              </Tooltip>
            </span>
            <span className='hover:text-white transition-all'>
              <Tooltip label='Enable repeat' bg='neutral.700' fontWeight={400} fontSize={14} placement='top' borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                <Repeat2 width={19}/>
              </Tooltip>
            </span>
          </div>
          <div className='flex items-center gap-3 py-3'>
            <span className='text-xs text-spotify'>1:50</span>
            <div className='group/item h-1 rounded-full w-60 md:w-60 lg:w-96 xl:w-128 bg-spotify-light'>
              <div className='h-1 rounded-full w-2/3 bg-white group-hover/item:bg-green-600 relative'>
                <span className='group/edit invisible p-1.5 absolute rounded-full flex ball-center bg-white group-hover/item:visible'></span>
              </div>
            </div>
            <span className='text-xs text-spotify'>2:40</span>
          </div>
        </div>
        <div className='icons-right flex my-auto'>
            <div className='flex flex-1 gap-2 xl:gap-3 text-spotify'>
              <span className='hover:text-white transition-all cursor-pointer'>
                <Tooltip label='Lyrics' bg='neutral.700' fontWeight={400} fontSize={14} borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                  <Mic2 width={17}/>
                </Tooltip>
              </span>
              <span className='hover:text-white transition-all cursor-pointer'>
                <Tooltip label='Queue' bg='neutral.700' fontWeight={400} fontSize={14} borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                  <ListMusic width={19}/>
                </Tooltip>
              </span>
              <span className='hover:text-white transition-all'>
                <Tooltip label='Connect to a device' bg='neutral.700' fontWeight={400} fontSize={14} borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                  <MonitorSpeaker width={19}/>
                </Tooltip>
              </span>
              <span className='hover:text-white transition-all'>
                <Tooltip label='Mute' bg='neutral.700' fontWeight={400} fontSize={14} borderRadius={3} paddingX={2} paddingY={1} openDelay={300} color='white'>
                  <Volume2 width={19}/>
                </Tooltip>
              </span>
              <div className='group/item volume-bar my-auto flex items-center w-16 lg:w-20 xl:w-24 cursor-default'>
                <VolumeSlider></VolumeSlider>
              </div>
            </div>
        </div>
      </footer>
      
    </div>
  )
}