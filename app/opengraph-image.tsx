import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Van Wonderen Tegelwerken · tegelzetter in Breda'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Satori (de renderer) vereist `display: flex` op elke div met meer dan één kind.
export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo-mark + naam */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ display: 'flex', width: '36px', height: '36px', borderRadius: '4px', background: '#C2632F' }} />
              <div style={{ display: 'flex', width: '36px', height: '36px', borderRadius: '4px', background: '#E2854A' }} />
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ display: 'flex', width: '36px', height: '36px', borderRadius: '4px', background: '#E2854A' }} />
              <div style={{ display: 'flex', width: '36px', height: '36px', borderRadius: '4px', background: '#C2632F' }} />
            </div>
          </div>
          <div style={{ display: 'flex', color: '#FAFAF7', fontSize: '32px', fontWeight: 600, letterSpacing: '0.04em' }}>
            VAN WONDEREN TEGELWERKEN
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', color: '#FAFAF7', fontSize: '88px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            <div style={{ display: 'flex' }}>Tegelwerk waar u jaren</div>
            <div style={{ display: 'flex' }}>
              <span style={{ color: '#E2854A' }}>plezier</span>
              <span>&nbsp;van heeft.</span>
            </div>
          </div>
          <div style={{ display: 'flex', color: '#9CA3AF', fontSize: '32px', fontWeight: 400 }}>
            Badkamer · Vloer · Wand · Terras · Maatwerk · Breda en omstreken
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #374151', paddingTop: '32px' }}>
          <div style={{ display: 'flex', color: '#FAFAF7', fontSize: '28px', fontWeight: 600 }}>
            wonderentegelwerken.nl
          </div>
          <div style={{ display: 'flex', color: '#C2632F', fontSize: '28px', fontWeight: 600 }}>
            06 18 24 92 49
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
