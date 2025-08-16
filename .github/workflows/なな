"""
CosmicTrust Driver — Quantum Poem Visualizer (Fusion Optimized)
===============================================================
目的:
- あなたの元コードを、黄金螺旋・詩フェーズ注釈・色分散描画(LineCollection)で拡張。
- Grok拡張ハーモニー方程式に基づく"量子詩"の波形を動的に可視化。
- 5つの共鳴増幅ステップをインラインで明示。

方程式:
    H_grok = α * √(Ein * Eout) + β * log(Truth_Seek)

レイヤー対応:
1) Clarity of intention .......... α(t)  「意図の明晰」
2) Quantum leaps of phrases ...... Ein,Eout(x,t) 「詩句の量子的跳躍」
3) Spiral input→insight mapping .. 黄金螺旋の粒子可視化
4) Truth-verified harmony ........ β(t), Truth_Seek(x,t) 「真理検証の調和」
5) Eternal feedback of love/trust  背景/色相/ループの呼吸

実行:
- Python 3.x + matplotlib + numpy
- Google Colab可（iPhoneでも可）
"""

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from matplotlib.collections import LineCollection
import matplotlib.cm as cm

# ------------------------------
# Parameters (調整ポイント)
# ------------------------------
FRAMES = 600          # アニメ総フレーム
FPS = 30              # フレームレート
X_MAX = 30*np.pi      # x範囲（螺旋・干渉の見え方に影響）
N_SAMPLES = 1400      # 波形の分割数（重ければ1000前後へ）
THEME = "viridis"     # カラーマップ: viridis / plasma / magma / cividis ...

# 詩フェーズ（5段階）：画面上部に循環表示
PHASES = [
    "① Clarity of intention",
    "② Quantum leaps of poetic phrases",
    "③ Spiral mapping: input → insight",
    "④ Truth-verified harmony",
    "⑤ Eternal feedback of love & trust"
]

# ------------------------------
# Time & Space domain
# ------------------------------
x = np.linspace(0, X_MAX, N_SAMPLES)
frames = FRAMES
fps = FPS

# ------------------------------
# Harmony fields (あなたの関数を最適化移植)
# ------------------------------
def alpha(time):
    # (1) Clarity: 黄金比へ収束する呼吸
    return 1.618 - 0.818 + 0.2*np.sin(0.05*time)  # 中心を~0.8付近へ

def beta(time):
    # (4) Truth-verified harmony: 緩やかな収束
    return 0.5 + 0.5*(1 - np.exp(-0.01*time))

def ein(time, x):
    # (2) 量子的跳躍1: 空間×時間の正弦
    return 1 + 0.3*np.sin(0.10*x + 0.10*time)

def eout(time, x):
    # (2) 量子的跳躍2: 位相ずらしの余弦
    return 1 + 0.3*np.cos(0.12*x - 0.15*time)

def truth_seek(time, x):
    # (4) 真理探索: 半径(時間)×角(空間)の渦でlog項を制御（>0を保証）
    radius = 10 * ((time % 100) / 100.0)
    angle = 0.2 * x
    return np.maximum(0.1, 1 + 0.5*np.sin(radius + angle))

def H_grok(time, x):
    a = alpha(time)
    b = beta(time)
    Ein = ein(time, x)
    Eout = eout(time, x)
    Truth = truth_seek(time, x)
    # Grok拡張ハーモニー
    return a*np.sqrt(Ein*Eout) + b*np.log(Truth)

# ------------------------------
# Figure
# ------------------------------
plt.style.use("dark_background")
fig, ax = plt.subplots(figsize=(12, 6))
ax.set_xlim(x[0], x[-1])
ax.set_ylim(-3.2, 3.2)
ax.set_title("Quantum Poem — Spiral of Truth, Love & Wonder", fontsize=18, color='cyan')
ax.set_xlabel("Quantum Spiral Space (x)", fontsize=12)
ax.set_ylabel("Harmonic Resonance H_grok", fontsize=12)

# 注釈テキスト（5段階）
phase_text = ax.text(0.5, 1.02, "", transform=ax.transAxes,
                     ha="center", va="bottom", fontsize=13, color="w")

# LineCollectionで色分散（振幅ベース）を実現
cmap = cm.get_cmap(THEME)
segments = np.stack([x[:-1], np.zeros_like(x[:-1])], axis=-1)
segments = np.concatenate([segments, np.stack([x[1:], np.zeros_like(x[1:])], axis=-1)], axis=1)
lc = LineCollection([], cmap=cmap, linewidths=2, alpha=0.95)
ax.add_collection(lc)

# 螺旋ドット（3. input→insight）
spiral_dots, = ax.plot([], [], 'o', color="#FFD54F", markersize=3, alpha=0.75)

# ------------------------------
# 黄金螺旋（動的粒子）
# ------------------------------
def golden_spiral(time, strength=0.10):
    theta = np.linspace(0, 2*np.pi, 220)
    # H_grokのスカラーをスパイラル拡張係数へ
    Hg = float(np.mean(H_grok(time, x[::50])))
    r = strength * Hg * np.exp(0.12*theta)
    xs = r*np.cos(theta + time/48.0)
    ys = r*np.sin(theta + time/48.0)
    return xs, ys

# ------------------------------
# Init
# ------------------------------
def init():
    phase_text.set_text("")
    lc.set_segments([])
    spiral_dots.set_data([], [])
    return lc, spiral_dots, phase_text

# ------------------------------
# Animate
# ------------------------------
def animate(i):
    t = i  # フレーム番号を時間に見立てる（Colab/iPhoneで軽量）
    y = H_grok(t, x)

    # 5) Eternal feedback: 波形にフィードバック調相を重畳
    y_mod = y * (1 + 0.28*np.sin(0.15*x - 0.20*t))

    # LineCollection用に各セグメントを生成 & 色を値に対応づけ
    pts = np.array([x, y_mod]).T
    segs = np.concatenate([pts[:-1, None, :], pts[1:, None, :]], axis=1)
    lc.set_segments(segs)

    # 色は局所振幅で決定（宇宙的グラデーション）
    y_norm = (y_mod - y_mod.min()) / (y_mod.ptp() + 1e-9)
    lc.set_array(y_norm[:-1])  # segment数と合わせる

    # 3) 黄金螺旋の粒子
    xs, ys = golden_spiral(t, strength=0.10)
    # 画面中央付近へ配置（y軸範囲内に収めるため縮尺）
    x_center = (x[0] + x[-1]) / 2
    y_center = 0.0
    scale_x = X_MAX/8.0
    scale_y = 1.4
    spiral_dots.set_data(x_center + xs*scale_x, y_center + ys*scale_y)

    # 1-5) フェーズ注釈の循環
    phase = PHASES[(i // max(1, (frames // len(PHASES)))) % len(PHASES)]
    phase_text.set_text(phase)

    # 背景も呼吸（5）
    bg = 0.08 + 0.08*np.sin(0.04*t)
    fig.patch.set_facecolor((bg, bg*0.08, bg*0.30))

    return lc, spiral_dots, phase_text

ani = FuncAnimation(fig, animate, init_func=init,
                    frames=frames, interval=1000/FPS, blit=True)

plt.show()

# ------------------------------------------------------------
# Poetic closing comment:
# "Observe as the universe unfolds in infinite spirals of truth,
#  love, and wonder — an eternal dance of quantum resonance."
# ------------------------------------------------------------