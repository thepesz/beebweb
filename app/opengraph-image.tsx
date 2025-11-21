import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Beebsi - Your Body. Decoded.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {/* App Name */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: 'white',
            marginBottom: 30,
            letterSpacing: '-0.02em',
          }}
        >
          Beebsi
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 300,
            color: '#a0a0a0',
            marginBottom: 60,
            letterSpacing: '0.01em',
          }}
        >
          Your Body. Decoded.
        </div>

        {/* Key Features */}
        <div
          style={{
            display: 'flex',
            gap: 50,
            marginTop: 40,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 72, color: '#4A90E2', marginBottom: 10 }}>💤</div>
            <div style={{ fontSize: 28, color: 'white', fontWeight: 600 }}>Sleep</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 72, color: '#50E3C2', marginBottom: 10 }}>🔄</div>
            <div style={{ fontSize: 28, color: 'white', fontWeight: 600 }}>Recovery</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 72, color: '#FF6B6B', marginBottom: 10 }}>⚡</div>
            <div style={{ fontSize: 28, color: 'white', fontWeight: 600 }}>Strain</div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            fontSize: 32,
            color: '#6a6a6a',
            fontWeight: 300,
          }}
        >
          Science. Without the hardware.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
