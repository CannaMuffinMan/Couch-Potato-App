"use client";

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#F0F4FF',
      fontFamily: "'Bangers', cursive",
      overflow: 'auto'
    }}>
      {/* Nebula Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 80%, #00F0FF40 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FF00AA40 0%, transparent 50%)',
        animation: 'nebulaPulse 12s infinite alternate',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '95vw',
        padding: '2rem',
        textAlign: 'center',
        zIndex: 10,
        pointerEvents: 'auto',
        position: 'relative'
      }}>
        {/* Header */}
        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          letterSpacing: '8px',
          background: 'linear-gradient(90deg, #00ff41, #ff00ff, #00ff41)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          animation: 'textGlow 4s infinite, textShadow 8s infinite',
          textShadow: '0 0 40px #00ff41',
          marginBottom: '2rem'
        }}>
          FOREVER COUCH GANG
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          background: 'linear-gradient(90deg, #00ff41, #ff00ff, #00ff41)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          animation: 'textGlow 6s infinite',
          textShadow: '0 0 30px #00ff41',
          marginBottom: '2rem'
        }}>
          JAN 1 2026
        </p>

        {/* Countdown */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2vw',
          margin: '2rem 0',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'rgba(0, 255, 65, 0.3)',
            border: '3px solid #00ff41',
            padding: '1rem 2rem',
            borderRadius: '20px',
            minWidth: '100px',
            boxShadow: '0 0 40px #00ff41'
          }}>
            <div style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              textShadow: '0 0 20px #00ff41'
            }} id="days">--</div>
            <div style={{ fontSize: '1rem' }}>DAYS</div>
          </div>
          <div style={{
            background: 'rgba(0, 255, 65, 0.3)',
            border: '3px solid #00ff41',
            padding: '1rem 2rem',
            borderRadius: '20px',
            minWidth: '100px',
            boxShadow: '0 0 40px #00ff41'
          }}>
            <div style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              textShadow: '0 0 20px #00ff41'
            }} id="hours">--</div>
            <div style={{ fontSize: '1rem' }}>HOURS</div>
          </div>
          <div style={{
            background: 'rgba(0, 255, 65, 0.3)',
            border: '3px solid #00ff41',
            padding: '1rem 2rem',
            borderRadius: '20px',
            minWidth: '100px',
            boxShadow: '0 0 40px #00ff41'
          }}>
            <div style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              textShadow: '0 0 20px #00ff41'
            }} id="mins">--</div>
            <div style={{ fontSize: '1rem' }}>MINS</div>
          </div>
          <div style={{
            background: 'rgba(0, 255, 65, 0.3)',
            border: '3px solid #00ff41',
            padding: '1rem 2rem',
            borderRadius: '20px',
            minWidth: '100px',
            boxShadow: '0 0 40px #00ff41'
          }}>
            <div style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              textShadow: '0 0 20px #00ff41'
            }} id="secs">--</div>
            <div style={{ fontSize: '1rem' }}>SECS</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{
          width: '90%',
          height: '40px',
          background: 'rgba(17, 17, 17, 0.5)',
          border: '3px solid #00ff41',
          borderRadius: '20px',
          overflow: 'hidden',
          margin: '2rem 0',
          boxShadow: '0 0 30px #00ff41'
        }}>
          <div
            id="fill"
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #00ff41, #ff00ff)',
              width: '0%',
              transition: 'width 1s ease',
              boxShadow: '0 0 20px #00ff41'
            }}
          />
        </div>

        {/* War Report */}
        <div style={{
          background: 'rgba(255, 0, 102, 0.2)',
          padding: '2rem',
          border: '3px solid #ff00ff',
          borderRadius: '20px',
          margin: '2rem 0',
          boxShadow: '0 0 40px #ff00ff'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, #ff00ff, #00ff41)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            WAR REPORT
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', marginBottom: '1rem' }}>
            Genesis Block: Deployed • Mining Contract: Ready • Tokenomics: Locked
          </p>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
            One Human • One Wallet • Infinite Rewards
          </p>
          <a
            href="/whitepaper.md"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: 'linear-gradient(90deg, #00ff41, #ff00ff)',
              color: '#000',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              boxShadow: '0 0 20px #00ff41'
            }}
          >
            📄 READ WHITE PAPER
          </a>
        </div>

        {/* Merch Section */}
        <div style={{
          margin: '3rem 0',
          padding: '2rem',
          background: 'rgba(0, 255, 65, 0.2)',
          border: '3px solid #00ff41',
          borderRadius: '20px',
          textAlign: 'center',
          boxShadow: '0 0 30px #00ff41'
        }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            MERCH DROP LIVE – GEAR UP FOR GENESIS
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
            Hoodies, tees, snapbacks, trays, lighters with deer smoke logo. $COUCH payments soon.
          </p>
        </div>

        {/* Final Messages */}
        <p style={{
          background: 'linear-gradient(90deg, #ff00ff, #00ff41, #ff00ff)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          animation: 'blink 0.8s infinite',
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          margin: '2rem 0'
        }}>
          WE ARE SO FUCKING CLOSE
        </p>

        <p style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          We're building our side of the bridge.<br />
          If they burn it down — we'll build the whole damn thing.<br />
          Forever Couch Gang forever.
        </p>
      </div>

      {/* Footer */}
      <footer style={{
        position: 'fixed',
        bottom: '1rem',
        width: '100%',
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 'clamp(1rem, 2vw, 1.4rem)',
        pointerEvents: 'none'
      }}>
        ONE HUMAN • ONE WALLET • INFINITE ROT
      </footer>

      <style jsx>{`
        @keyframes nebulaPulse {
          0% { opacity: 0.5; }
          100% { opacity: 0.9; }
        }

        @keyframes textGlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes textShadow {
          0%, 100% { text-shadow: 0 0 40px #00ff41; }
          20% { text-shadow: 5px 0 #ff00ff, -5px 0 #00ffff; }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              // Robust Countdown Timer + Progress Fill
              const genesis = new Date(Date.UTC(2026, 0, 1, 5, 0, 0)).getTime();
              const startYear = new Date(Date.UTC(2025, 0, 1, 5, 0, 0)).getTime();

              function updateTimer() {
                try {
                  const now = Date.now();
                  const distance = genesis - now;

                  const daysEl = document.getElementById('days');
                  const hoursEl = document.getElementById('hours');
                  const minsEl = document.getElementById('mins');
                  const secsEl = document.getElementById('secs');
                  const fillEl = document.getElementById('fill');

                  if (!daysEl || !hoursEl || !minsEl || !secsEl || !fillEl) {
                    return; // DOM not ready yet
                  }

                  if (distance < 0) {
                    const countdownArea = document.querySelector('.countdown');
                    if (countdownArea) {
                      countdownArea.innerHTML = "<h1 style='background:linear-gradient(90deg,#00ff41,#ff00ff);-webkit-background-clip:text;color:transparent;font-size:clamp(4rem,15vw,10rem)'>GENESIS IS LIVE</h1>";
                    }
                    fillEl.style.width = '100%';
                    return;
                  }

                  const days = Math.floor(distance / 86400000);
                  const hours = Math.floor((distance % 86400000) / 3600000);
                  const mins = Math.floor((distance % 3600000) / 60000);
                  const secs = Math.floor((distance % 60000) / 1000);

                  daysEl.textContent = days.toString().padStart(2, '0');
                  hoursEl.textContent = hours.toString().padStart(2, '0');
                  minsEl.textContent = mins.toString().padStart(2, '0');
                  secsEl.textContent = secs.toString().padStart(2, '0');

                  const total = genesis - startYear;
                  const elapsed = now - startYear;
                  const percent = Math.min((elapsed / total) * 100, 100);
                  fillEl.style.width = percent + '%';
                } catch (err) {
                  console.error('updateTimer error', err);
                }
              }

              // Start timer once DOM is ready
              function startTimerWhenReady(){
                updateTimer();
                setInterval(updateTimer, 1000);
              }

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', startTimerWhenReady);
              } else {
                startTimerWhenReady();
              }

              // Dev Access Shortcut
              document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                  e.preventDefault();
                  window.location.href = '/dev';
                }
              });

              // Shopify embed: initialize only if the merch container exists
              function initShopifyIfNeeded(){
                const node = document.getElementById('collection-component-1765326571185');
                if (!node) return;

                const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
                function loadScript(cb){
                  const s = document.createElement('script');
                  s.async = true;
                  s.src = scriptURL;
                  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);
                  s.onload = cb;
                }

                function ShopifyBuyInit(){
                  try{
                    var client = ShopifyBuy.buildClient({
                      domain: 'csfwks-my.myshopify.com',
                      storefrontAccessToken: 'ceb8a73c9324137e9fe6152cb2accdfb',
                    });
                    ShopifyBuy.UI.onReady(client).then(function (ui) {
                      ui.createComponent('collection', {
                        id: '338523390120',
                        node: node,
                        moneyFormat: '%24%7B%7Bamount%7D%7D'
                      });
                    });
                  }catch(e){console.error('Shopify init error', e);}
                }

                if (window.ShopifyBuy) {
                  if (window.ShopifyBuy.UI) {
                    ShopifyBuyInit();
                  } else {
                    loadScript(ShopifyBuyInit);
                  }
                } else {
                  loadScript(ShopifyBuyInit);
                }
              }

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initShopifyIfNeeded);
              } else {
                initShopifyIfNeeded();
              }
            })();
          `
        }}
      />
    </div>
  );
}
