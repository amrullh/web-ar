// Lokasi File: src/components/ARScanner.jsx

import React from 'react';

// Komponen utama untuk AR Scanner
const ARScanner = () => {
    // CSS styles untuk overlay dan animasi.
    // Ditempatkan di sini agar komponen ini mandiri (self-contained).
    const styles = `
        body {
            margin: 0;
            overflow: hidden;
        }

        /* Container utama untuk memastikan scene A-Frame tidak menutupi overlay */
        .ar-container {
            position: relative;
            width: 100vw;
            height: 100vh;
        }

        /* ==================== SCANNER FRAME ==================== */
        .scanner-frame {
            position: absolute; /* Diubah dari fixed ke absolute agar terikat pada container */
            top: 50%;
            left: 50%;
            width: 280px;
            height: 280px;
            transform: translate(-50%, -50%);
            border-radius: 12px;
            box-sizing: border-box;
            z-index: 20;
            background: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(2px);
            border: 2px dashed rgba(255, 255, 255, 0.25);
        }

        /* Sudut bercahaya */
        .corner {
            position: absolute;
            width: 32px;
            height: 32px;
            border: 4px solid #00ffcc;
            border-radius: 4px;
        }

        .corner.tl {
            top: -2px;
            left: -2px;
            border-right: none;
            border-bottom: none;
        }

        .corner.tr {
            top: -2px;
            right: -2px;
            border-left: none;
            border-bottom: none;
        }

        .corner.bl {
            bottom: -2px;
            left: -2px;
            border-right: none;
            border-top: none;
        }

        .corner.br {
            bottom: -2px;
            right: -2px;
            border-left: none;
            border-top: none;
        }

        /* Garis scanner animasi */
        .scan-line {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to right,
                transparent,
                #00ffcc,
                transparent);
            animation: scan 2.5s linear infinite;
        }

        @keyframes scan {
            0% {
                top: 0%;
            }
            100% {
                top: 100%;
            }
        }
    `;

    return (
        <div className="ar-container">
            {/* Menambahkan style ke dalam komponen */}
            <style>{styles}</style>

            {/* SCANNER FRAME OVERLAY */}
            <div className="scanner-frame">
                <div className="corner tl"></div>
                <div className="corner tr"></div>
                <div className="corner bl"></div>
                <div className="corner br"></div>
                <div className="scan-line"></div>
            </div>

            {/* SCENE AR */}
            {/* Pastikan script A-Frame dan AR.js sudah dimuat di file index.html Anda */}
            <a-scene
                embedded
                arjs="sourceType: webcam; debugUIEnabled: false;"
                vr-mode-ui="enabled: false"
                renderer="logarithmicDepthBuffer: true;"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
            >
                {/* Marker untuk pola custom */}
                <a-marker type="pattern" url="pola.patt">
                    <a-entity
                        gltf-model="url(ekosistem.glb)"
                        scale="0.1 0.1 0.1"
                        rotation="-90 0 0"
                        position="0 0.5 0"
                    ></a-entity>
                </a-marker>

                {/* Kamera AR dengan fov yang diubah menjadi 80 agar tidak terlalu zoom */}
                <a-camera fov="80"></a-camera>
            </a-scene>
        </div>
    );
};

export default ARScanner;
