# Lesson LIFF by Next.js

## Installation

`yarn add @line/liff styled-components`

`cp .env.example .env.local`

## ngrok setup

https://ngrok.com/

※ここでは MacOS Homebrew の場合のみ

### バージョンチェック

```
ngrok --version
```

### なければインストール

```
brew install ngrok
```

### アプリを起動

```
yarn dev -p 3000
```

### ngrok を使用

```
ngrok http 3000

```

## 参考

- https://qiita.com/r315dr/items/8c0f2803a0c4ba1cfee0
- https://dev.to/yutagoto/react-typescript-liff-1kpk
- https://qiita.com/Marusoccer/items/7033c1bb9c85bf6789bd
