'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import Link from 'next/link'
import { PROFILE_PICTURE_SIZE } from '@/lib/constants'

export function Header() {
  return (
    <header className="mb-8 flex items-center gap-4">
      <Image
        src="/profile_picture.jpeg"
        height={PROFILE_PICTURE_SIZE}
        width={PROFILE_PICTURE_SIZE}
        alt="Profile picture"
        style={{ borderRadius: PROFILE_PICTURE_SIZE }}
      />
      <div>
        <Link href="/" className="text-xl text-black dark:text-white">
          Blake Reimer
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Senior Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
