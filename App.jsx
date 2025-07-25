/** @jsxImportSource react */
import React from "react";
import { styled, css } from "@linaria/react";
import { createRoot } from "react-dom/client";

const GlobalStyles = css`
  :global() {
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue';
    }

    a {
      -webkit-tap-highlight-color: transparent;
    }

    html {
      scroll-behavior: smooth;
      scrollbar-width: thin;
      scrollbar-color: springgreen black;
    }

    body {
      height: 1200vh;
      width: 100%;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      height: 100vh;
      width: 100%;
      background-image: url('assets/img-1.avif');
      background-size: cover;
      animation: changeImage auto linear forwards;
      animation-timeline: scroll();
      filter: grayscale(1);
    }

    @keyframes changeImage {
      0% {
        background-image: url('assets/img-1.avif');
      }
      8.3% {
        background-image: url('assets/img-2.avif');
      }
      16.6% {
        background-image: url('assets/img-3.avif');
      }
      25% {
        background-image: url('assets/img-4.avif');
      }
      33.3% {
        background-image: url('assets/img-5.avif');
      }
      41.6% {
        background-image: url('assets/img-6.avif');
      }
      50% {
        background-image: url('assets/img-7.avif');
      }
      58.3% {
        background-image: url('assets/img-8.avif');
      }
      66.6% {
        background-image: url('assets/img-9.avif');
      }
      75% {
        background-image: url('assets/img-10.avif');
      }
      83.3% {
        background-image: url('assets/img-11.avif');
      }
      100% {
        background-image: url('assets/img-12.avif');
      }
    }

    @keyframes effect {
      0% {
        transform: translateY(-50%) translateZ(var(--init));
        opacity: 1;
      }
      100% {
        transform: translateY(-50%) translateZ(var(--end));
        opacity: 0;
      }
    }
  }
`;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  transform-style: preserve-3d;
  perspective: 300px;
`;

const Portrait = styled.aside`
  --end: 150px;
  transform-style: preserve-3d;
  width: 35%;
  height: 35%;
  aspect-ratio: 16 / 9;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  animation: effect auto linear both;
  animation-timeline: scroll();
  background-position: center;
  background-size: cover;

  &.left {
    left: 20%;
  }

  &.right {
    right: 20%;
  }

  &.n1 {
    background-image: url('assets/img-1.avif');
    --init: 120px;
    animation-range: 0 100vh;
    z-index: 12;
  }

  &.n2 {
    background-image: url('assets/img-2.avif');
    --init: 110px;
    animation-range: 100vh 200vh;
    z-index: 11;
  }

  &.n3 {
    background-image: url('assets/img-3.avif');
    --init: 100px;
    animation-range: 200vh 300vh;
    z-index: 10;
  }

  &.n4 {
    background-image: url('assets/img-4.avif');
    --init: 90px;
    animation-range: 300vh 400vh;
    z-index: 9;
  }

  &.n5 {
    background-image: url('assets/img-5.avif');
    --init: 80px;
    animation-range: 400vh 500vh;
    z-index: 10;
  }

  &.n6 {
    background-image: url('assets/img-6.avif');
    --init: 70px;
    animation-range: 500vh 600vh;
  }

  &.n7 {
    background-image: url('assets/img-7.avif');
    --init: 60px;
    animation-range: 600vh 700vh;
  }

  &.n8 {
    background-image: url('assets/img-8.avif');
    --init: 50px;
    animation-range: 700vh 800vh;
  }

  &.n9 {
    background-image: url('assets/img-9.avif');
    --init: 40px;
    animation-range: 800vh 900vh;
  }

  &.n10 {
    background-image: url('assets/img-10.avif');
    --init: 30px;
    animation-range: 900vh 1000vh;
  }

  &.n11 {
    background-image: url('assets/img-11.avif');
    --init: 20px;
    animation-range: 1000vh 1100vh;
  }

  &.n12 {
    background-image: url('assets/img-12.avif');
    --init: 10px;
    animation-range: 1100vh 1200vh;
  }
`;

const App = () => {
  return (
    <>
      <div className={GlobalStyles} />
      <Container>
        <Portrait className="right n1" />
        <Portrait className="left n2" />
        <Portrait className="right n3" />
        <Portrait className="left n4" />
        <Portrait className="right n5" />
        <Portrait className="left n6" />
        <Portrait className="right n7" />
        <Portrait className="left n8" />
        <Portrait className="right n9" />
        <Portrait className="left n10" />
        <Portrait className="right n11" />
        <Portrait className="left n12" />
      </Container>
    </>
  );
};

const mount = document.createElement("div");
document.body.appendChild(mount);

const root = createRoot(mount);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
