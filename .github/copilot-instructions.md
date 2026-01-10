# Copilot Instructions - Rails V8 Sandbox

## Styling Guidelines

### 1. Framework
- **必須**: Tailwind CSS を使用する
- スタイルは HTML に直接 Tailwind ユーティリティクラスで適用
- 独立した CSS ファイルは原則作成しない
- アニメーションや特殊な効果のみ `<style>` タグで定義

### 2. Design System

#### Color Palette
- **背景**: スレート系（slate-950, slate-900, slate-800）
- **アクセント**: パープル系（purple-600, purple-500）
- **警告・高強調**: レッド・ピンク系（red-500, pink-500）
- **テキスト**: グレー系（gray-300, gray-400）で段階的

#### Visual Effects
- グラスモーフィズム: `backdrop-blur-xl border border-slate-700/50`
- グラデーション: 背景や CTA ボタンに活用
- ホバーエフェクト: `-translate-y-1 shadow-lg transition-all duration-300`
- グロー効果: グループホバーで光る背景 `group-hover:opacity-20 blur`

### 3. Component Patterns

#### Cards
```html
<div class="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
  <!-- content -->
</div>
```

#### Buttons
```html
<!-- Primary (Gradient) -->
<button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all">

<!-- Secondary (Border) -->
<button class="bg-slate-800 border-2 border-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:border-purple-500 transition-all">
```

#### Feature Cards with Hover
```html
<div class="group relative">
  <div class="absolute inset-0 bg-gradient-to-r from-[color]-600 to-[color]-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
  <div class="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 transition-all group-hover:border-[color]-500 group-hover:-translate-y-1">
    <!-- content -->
  </div>
</div>
```

### 4. Layout

#### Full Height Background
- `<html>` タグに背景クラスを適用
- ` body` は `m-0 p-0` でリセット
- スクロール時も背景が途切れないよう注意

#### Spacing
- セクション間: `mb-12, mb-16`
- 内部パディング: `p-6, p-8`
- グリッド: `gap-4, gap-6, gap-8`

### 5. Responsive Design

#### Breakpoints（Tailwind デフォルト）
- `md:` - 768px以上
- `lg:` - 1024px以上
- `sm:` - 640px以上

#### Mobile First
```html
<!-- モバイル優先で記述 -->
<div class="flex flex-col md:flex-row gap-4">
  <!-- flex-col: 小画面, flex-row: 中画面以上 -->
</div>
```

### 6. Typography

#### Hierarchy
- Heading 1: `text-6xl md:text-7xl font-black`
- Heading 2: `text-xl md:text-2xl font-bold`
- Heading 3: `text-lg font-semibold`
- Body: `text-base text-gray-300`
- Small: `text-sm text-gray-400`

#### Emphasis
- 強調色（パープル）: `text-purple-300, text-purple-400`
- リンク: `hover:text-white transition-colors`

### 7. Dark Theme

#### Convention
- 背景: `bg-slate-900, bg-slate-800, bg-slate-800/30` (with transparency)
- ボーダー: `border-slate-700, border-slate-700/50`
- テキスト: `text-white, text-gray-300, text-gray-400`
- 薄く表示: `/50, /75` で透明度を調整

### 8. Animations

#### Built-in
- Transition: `transition transition-all duration-300`
- Transform: 位置や大きさの変化は**使わない**（移動系アニメーション禁止）
- Opacity: `opacity-0 group-hover:opacity-20`
- **色変化のみを推奨**: `hover:bg-slate-800`, `hover:border-purple-500`, `hover:text-gray-300`

#### ホバーエフェクトの原則
- ❌ `hover:-translate-y-1`, `-translate-x-1`, `scale-105` など移動・拡大系は使わない
- ❌ `hover:gap-3` など間隔を変動させない
- ✅ 背景色変化: `group-hover:bg-slate-800/70`
- ✅ テキスト色変化: `group-hover:text-gray-300`
- ✅ ボーダー色変化: `group-hover:border-purple-500`
- ✅ Blur や Opacity などの視覚効果: `blur`, `opacity-0 group-hover:opacity-20`

#### Custom Keyframes（style タグで定義）
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fadeIn 0.8s ease-out; }
```
※ Initial animation（初期表示時）のみ transform を使用可能

### 9. Accessibility

- コントラスト比の確認（WCAG AA 以上）
- ホバー時の視認性確保
- キーボード操作対応（`focus:outline-none focus:ring-2`）
- `alt` テキストの記載（画像使用時）

### 10. Best Practices

- ❌ RGB 値や16進数の色を直接書かない
- ✅ Tailwind カラーパレットを使う
- ❌ `!important` を使わない
- ✅ クラスの組み合わせで調整
- ❌ クラス名を動的に生成しない
- ✅ 事前に全クラスを定義

