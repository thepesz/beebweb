import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #4A90E2 0%, #50E3C2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-2px',
          }}
        >
          B
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
