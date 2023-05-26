"use client";
import React from "react";

const Pattern = () => {
  function animateLines() {
    let lines: any = document
      ?.getElementById("lines")
      ?.getElementsByTagName("line");
    for (let i = 0; i < lines.length; i++) {
      let currentOpacity = lines[i].getAttribute("opacity");
      let randomNumber = Math.random() * 0.9 + 0.1;
      let keyframes = [
        { opacity: currentOpacity },
        { opacity: 1 },
        { opacity: randomNumber },
        { opacity: currentOpacity },
      ];
      lines[i].animate(keyframes, {
        duration: 3000,
        iterations: Infinity,
        easing: "ease-in-out",
      });
    }
  }
  React.useEffect(() => {
    // Call requestAnimationFrame to start the animation
    requestAnimationFrame(animateLines);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      // xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 1422 800"
      className="w-full h-full md:scale-[2.5] scale-[2] opacity-25"
    >
      <g
        strokeWidth="3.5"
        stroke="hsl(0, 0%, 100%)"
        fill="none"
        strokeLinecap="square"
        id="lines"
      >
        <line x1="54" y1="0" x2="0" y2="54" opacity="0.82"></line>
        <line x1="54" y1="0" x2="108" y2="54" opacity="0.53"></line>
        <line x1="162" y1="0" x2="108" y2="54" opacity="0.14"></line>
        <line x1="162" y1="0" x2="216" y2="54" opacity="0.20"></line>
        <line x1="216" y1="0" x2="270" y2="54" opacity="0.35"></line>
        <line x1="270" y1="0" x2="324" y2="54" opacity="0.09"></line>
        <line x1="378" y1="0" x2="324" y2="54" opacity="0.82"></line>
        <line x1="378" y1="0" x2="432" y2="54" opacity="0.51"></line>
        <line x1="432" y1="0" x2="486" y2="54" opacity="0.70"></line>
        <line x1="486" y1="0" x2="540" y2="54" opacity="0.14"></line>
        <line x1="540" y1="0" x2="594" y2="54" opacity="0.09"></line>
        <line x1="594" y1="0" x2="648" y2="54" opacity="0.15"></line>
        <line x1="702" y1="0" x2="648" y2="54" opacity="0.46"></line>
        <line x1="702" y1="0" x2="756" y2="54" opacity="0.88"></line>
        <line x1="810" y1="0" x2="756" y2="54" opacity="0.26"></line>
        <line x1="864" y1="0" x2="810" y2="54" opacity="0.45"></line>
        <line x1="864" y1="0" x2="918" y2="54" opacity="0.43"></line>
        <line x1="918" y1="0" x2="972" y2="54" opacity="0.99"></line>
        <line x1="1026" y1="0" x2="972" y2="54" opacity="0.89"></line>
        <line x1="1026" y1="0" x2="1080" y2="54" opacity="0.64"></line>
        <line x1="1080" y1="0" x2="1134" y2="54" opacity="0.52"></line>
        <line x1="1188" y1="0" x2="1134" y2="54" opacity="0.64"></line>
        <line x1="1242" y1="0" x2="1188" y2="54" opacity="0.56"></line>
        <line x1="1296" y1="0" x2="1242" y2="54" opacity="0.99"></line>
        <line x1="1350" y1="0" x2="1296" y2="54" opacity="0.27"></line>
        <line x1="1404" y1="0" x2="1350" y2="54" opacity="0.18"></line>
        <line x1="1458" y1="0" x2="1404" y2="54" opacity="0.99"></line>
        <line x1="0" y1="54" x2="54" y2="108" opacity="0.93"></line>
        <line x1="54" y1="54" x2="108" y2="108" opacity="0.50"></line>
        <line x1="162" y1="54" x2="108" y2="108" opacity="0.86"></line>
        <line x1="162" y1="54" x2="216" y2="108" opacity="0.58"></line>
        <line x1="270" y1="54" x2="216" y2="108" opacity="0.94"></line>
        <line x1="324" y1="54" x2="270" y2="108" opacity="0.33"></line>
        <line x1="378" y1="54" x2="324" y2="108" opacity="0.65"></line>
        <line x1="432" y1="54" x2="378" y2="108" opacity="0.47"></line>
        <line x1="432" y1="54" x2="486" y2="108" opacity="0.28"></line>
        <line x1="486" y1="54" x2="540" y2="108" opacity="0.32"></line>
        <line x1="540" y1="54" x2="594" y2="108" opacity="0.77"></line>
        <line x1="648" y1="54" x2="594" y2="108" opacity="0.42"></line>
        <line x1="648" y1="54" x2="702" y2="108" opacity="0.35"></line>
        <line x1="702" y1="54" x2="756" y2="108" opacity="0.21"></line>
        <line x1="810" y1="54" x2="756" y2="108" opacity="0.33"></line>
        <line x1="810" y1="54" x2="864" y2="108" opacity="0.30"></line>
        <line x1="864" y1="54" x2="918" y2="108" opacity="0.67"></line>
        <line x1="918" y1="54" x2="972" y2="108" opacity="0.84"></line>
        <line x1="1026" y1="54" x2="972" y2="108" opacity="0.75"></line>
        <line x1="1026" y1="54" x2="1080" y2="108" opacity="0.17"></line>
        <line x1="1134" y1="54" x2="1080" y2="108" opacity="0.16"></line>
        <line x1="1188" y1="54" x2="1134" y2="108" opacity="0.11"></line>
        <line x1="1188" y1="54" x2="1242" y2="108" opacity="0.67"></line>
        <line x1="1242" y1="54" x2="1296" y2="108" opacity="0.55"></line>
        <line x1="1350" y1="54" x2="1296" y2="108" opacity="0.88"></line>
        <line x1="1350" y1="54" x2="1404" y2="108" opacity="0.14"></line>
        <line x1="1458" y1="54" x2="1404" y2="108" opacity="0.94"></line>
        <line x1="54" y1="108" x2="0" y2="162" opacity="0.80"></line>
        <line x1="108" y1="108" x2="54" y2="162" opacity="0.43"></line>
        <line x1="108" y1="108" x2="162" y2="162" opacity="0.71"></line>
        <line x1="162" y1="108" x2="216" y2="162" opacity="0.58"></line>
        <line x1="270" y1="108" x2="216" y2="162" opacity="0.39"></line>
        <line x1="324" y1="108" x2="270" y2="162" opacity="0.42"></line>
        <line x1="378" y1="108" x2="324" y2="162" opacity="0.50"></line>
        <line x1="378" y1="108" x2="432" y2="162" opacity="0.93"></line>
        <line x1="486" y1="108" x2="432" y2="162" opacity="0.74"></line>
        <line x1="540" y1="108" x2="486" y2="162" opacity="0.10"></line>
        <line x1="540" y1="108" x2="594" y2="162" opacity="0.17"></line>
        <line x1="594" y1="108" x2="648" y2="162" opacity="0.44"></line>
        <line x1="702" y1="108" x2="648" y2="162" opacity="0.31"></line>
        <line x1="756" y1="108" x2="702" y2="162" opacity="0.62"></line>
        <line x1="810" y1="108" x2="756" y2="162" opacity="0.66"></line>
        <line x1="810" y1="108" x2="864" y2="162" opacity="0.10"></line>
        <line x1="864" y1="108" x2="918" y2="162" opacity="0.20"></line>
        <line x1="918" y1="108" x2="972" y2="162" opacity="0.71"></line>
        <line x1="972" y1="108" x2="1026" y2="162" opacity="0.93"></line>
        <line x1="1080" y1="108" x2="1026" y2="162" opacity="0.28"></line>
        <line x1="1080" y1="108" x2="1134" y2="162" opacity="0.84"></line>
        <line x1="1134" y1="108" x2="1188" y2="162" opacity="0.44"></line>
        <line x1="1242" y1="108" x2="1188" y2="162" opacity="0.34"></line>
        <line x1="1296" y1="108" x2="1242" y2="162" opacity="0.45"></line>
        <line x1="1350" y1="108" x2="1296" y2="162" opacity="0.67"></line>
        <line x1="1350" y1="108" x2="1404" y2="162" opacity="0.47"></line>
        <line x1="1404" y1="108" x2="1458" y2="162" opacity="0.32"></line>
        <line x1="0" y1="162" x2="54" y2="216" opacity="0.89"></line>
        <line x1="108" y1="162" x2="54" y2="216" opacity="0.77"></line>
        <line x1="108" y1="162" x2="162" y2="216" opacity="0.27"></line>
        <line x1="162" y1="162" x2="216" y2="216" opacity="0.24"></line>
        <line x1="270" y1="162" x2="216" y2="216" opacity="0.21"></line>
        <line x1="324" y1="162" x2="270" y2="216" opacity="0.16"></line>
        <line x1="378" y1="162" x2="324" y2="216" opacity="0.73"></line>
        <line x1="378" y1="162" x2="432" y2="216" opacity="0.96"></line>
        <line x1="486" y1="162" x2="432" y2="216" opacity="0.95"></line>
        <line x1="486" y1="162" x2="540" y2="216" opacity="0.56"></line>
        <line x1="540" y1="162" x2="594" y2="216" opacity="0.24"></line>
        <line x1="594" y1="162" x2="648" y2="216" opacity="0.80"></line>
        <line x1="702" y1="162" x2="648" y2="216" opacity="0.50"></line>
        <line x1="756" y1="162" x2="702" y2="216" opacity="0.34"></line>
        <line x1="810" y1="162" x2="756" y2="216" opacity="0.93"></line>
        <line x1="810" y1="162" x2="864" y2="216" opacity="0.22"></line>
        <line x1="918" y1="162" x2="864" y2="216" opacity="0.32"></line>
        <line x1="972" y1="162" x2="918" y2="216" opacity="0.31"></line>
        <line x1="1026" y1="162" x2="972" y2="216" opacity="0.16"></line>
        <line x1="1080" y1="162" x2="1026" y2="216" opacity="0.67"></line>
        <line x1="1134" y1="162" x2="1080" y2="216" opacity="0.35"></line>
        <line x1="1188" y1="162" x2="1134" y2="216" opacity="0.72"></line>
        <line x1="1242" y1="162" x2="1188" y2="216" opacity="0.81"></line>
        <line x1="1296" y1="162" x2="1242" y2="216" opacity="0.19"></line>
        <line x1="1350" y1="162" x2="1296" y2="216" opacity="0.37"></line>
        <line x1="1404" y1="162" x2="1350" y2="216" opacity="0.38"></line>
        <line x1="1404" y1="162" x2="1458" y2="216" opacity="0.84"></line>
        <line x1="54" y1="216" x2="0" y2="270" opacity="0.24"></line>
        <line x1="108" y1="216" x2="54" y2="270" opacity="0.81"></line>
        <line x1="162" y1="216" x2="108" y2="270" opacity="0.17"></line>
        <line x1="162" y1="216" x2="216" y2="270" opacity="0.96"></line>
        <line x1="270" y1="216" x2="216" y2="270" opacity="0.65"></line>
        <line x1="270" y1="216" x2="324" y2="270" opacity="0.28"></line>
        <line x1="324" y1="216" x2="378" y2="270" opacity="0.78"></line>
        <line x1="432" y1="216" x2="378" y2="270" opacity="0.10"></line>
        <line x1="432" y1="216" x2="486" y2="270" opacity="0.78"></line>
        <line x1="486" y1="216" x2="540" y2="270" opacity="0.97"></line>
        <line x1="540" y1="216" x2="594" y2="270" opacity="0.13"></line>
        <line x1="648" y1="216" x2="594" y2="270" opacity="0.44"></line>
        <line x1="648" y1="216" x2="702" y2="270" opacity="0.08"></line>
        <line x1="756" y1="216" x2="702" y2="270" opacity="0.36"></line>
        <line x1="756" y1="216" x2="810" y2="270" opacity="0.67"></line>
        <line x1="864" y1="216" x2="810" y2="270" opacity="0.37"></line>
        <line x1="864" y1="216" x2="918" y2="270" opacity="0.96"></line>
        <line x1="972" y1="216" x2="918" y2="270" opacity="0.88"></line>
        <line x1="972" y1="216" x2="1026" y2="270" opacity="0.33"></line>
        <line x1="1080" y1="216" x2="1026" y2="270" opacity="0.45"></line>
        <line x1="1080" y1="216" x2="1134" y2="270" opacity="0.79"></line>
        <line x1="1134" y1="216" x2="1188" y2="270" opacity="0.12"></line>
        <line x1="1188" y1="216" x2="1242" y2="270" opacity="0.88"></line>
        <line x1="1296" y1="216" x2="1242" y2="270" opacity="0.60"></line>
        <line x1="1296" y1="216" x2="1350" y2="270" opacity="0.40"></line>
        <line x1="1350" y1="216" x2="1404" y2="270" opacity="0.38"></line>
        <line x1="1404" y1="216" x2="1458" y2="270" opacity="0.82"></line>
        <line x1="54" y1="270" x2="0" y2="324" opacity="0.44"></line>
        <line x1="54" y1="270" x2="108" y2="324" opacity="0.29"></line>
        <line x1="162" y1="270" x2="108" y2="324" opacity="0.23"></line>
        <line x1="162" y1="270" x2="216" y2="324" opacity="0.42"></line>
        <line x1="216" y1="270" x2="270" y2="324" opacity="0.34"></line>
        <line x1="270" y1="270" x2="324" y2="324" opacity="0.13"></line>
        <line x1="378" y1="270" x2="324" y2="324" opacity="0.43"></line>
        <line x1="432" y1="270" x2="378" y2="324" opacity="0.15"></line>
        <line x1="432" y1="270" x2="486" y2="324" opacity="0.74"></line>
        <line x1="486" y1="270" x2="540" y2="324" opacity="0.12"></line>
        <line x1="594" y1="270" x2="540" y2="324" opacity="0.81"></line>
        <line x1="594" y1="270" x2="648" y2="324" opacity="0.21"></line>
        <line x1="648" y1="270" x2="702" y2="324" opacity="0.42"></line>
        <line x1="702" y1="270" x2="756" y2="324" opacity="0.20"></line>
        <line x1="756" y1="270" x2="810" y2="324" opacity="0.76"></line>
        <line x1="810" y1="270" x2="864" y2="324" opacity="0.58"></line>
        <line x1="864" y1="270" x2="918" y2="324" opacity="0.96"></line>
        <line x1="918" y1="270" x2="972" y2="324" opacity="0.99"></line>
        <line x1="1026" y1="270" x2="972" y2="324" opacity="0.68"></line>
        <line x1="1080" y1="270" x2="1026" y2="324" opacity="0.59"></line>
        <line x1="1080" y1="270" x2="1134" y2="324" opacity="0.80"></line>
        <line x1="1188" y1="270" x2="1134" y2="324" opacity="0.99"></line>
        <line x1="1242" y1="270" x2="1188" y2="324" opacity="0.97"></line>
        <line x1="1296" y1="270" x2="1242" y2="324" opacity="0.91"></line>
        <line x1="1296" y1="270" x2="1350" y2="324" opacity="0.49"></line>
        <line x1="1404" y1="270" x2="1350" y2="324" opacity="0.78"></line>
        <line x1="1404" y1="270" x2="1458" y2="324" opacity="0.52"></line>
        <line x1="0" y1="324" x2="54" y2="378" opacity="0.13"></line>
        <line x1="54" y1="324" x2="108" y2="378" opacity="0.44"></line>
        <line x1="108" y1="324" x2="162" y2="378" opacity="0.21"></line>
        <line x1="216" y1="324" x2="162" y2="378" opacity="0.56"></line>
        <line x1="216" y1="324" x2="270" y2="378" opacity="0.95"></line>
        <line x1="270" y1="324" x2="324" y2="378" opacity="0.56"></line>
        <line x1="324" y1="324" x2="378" y2="378" opacity="0.42"></line>
        <line x1="378" y1="324" x2="432" y2="378" opacity="0.25"></line>
        <line x1="432" y1="324" x2="486" y2="378" opacity="0.86"></line>
        <line x1="540" y1="324" x2="486" y2="378" opacity="0.49"></line>
        <line x1="594" y1="324" x2="540" y2="378" opacity="0.74"></line>
        <line x1="594" y1="324" x2="648" y2="378" opacity="0.07"></line>
        <line x1="702" y1="324" x2="648" y2="378" opacity="0.56"></line>
        <line x1="702" y1="324" x2="756" y2="378" opacity="0.16"></line>
        <line x1="756" y1="324" x2="810" y2="378" opacity="0.83"></line>
        <line x1="864" y1="324" x2="810" y2="378" opacity="0.82"></line>
        <line x1="864" y1="324" x2="918" y2="378" opacity="0.92"></line>
        <line x1="972" y1="324" x2="918" y2="378" opacity="0.29"></line>
        <line x1="1026" y1="324" x2="972" y2="378" opacity="0.39"></line>
        <line x1="1080" y1="324" x2="1026" y2="378" opacity="0.50"></line>
        <line x1="1134" y1="324" x2="1080" y2="378" opacity="0.49"></line>
        <line x1="1188" y1="324" x2="1134" y2="378" opacity="0.11"></line>
        <line x1="1242" y1="324" x2="1188" y2="378" opacity="0.93"></line>
        <line x1="1296" y1="324" x2="1242" y2="378" opacity="0.43"></line>
        <line x1="1350" y1="324" x2="1296" y2="378" opacity="0.31"></line>
        <line x1="1404" y1="324" x2="1350" y2="378" opacity="0.91"></line>
        <line x1="1404" y1="324" x2="1458" y2="378" opacity="0.43"></line>
        <line x1="54" y1="378" x2="0" y2="432" opacity="0.16"></line>
        <line x1="54" y1="378" x2="108" y2="432" opacity="0.48"></line>
        <line x1="162" y1="378" x2="108" y2="432" opacity="0.50"></line>
        <line x1="216" y1="378" x2="162" y2="432" opacity="0.66"></line>
        <line x1="270" y1="378" x2="216" y2="432" opacity="0.87"></line>
        <line x1="324" y1="378" x2="270" y2="432" opacity="0.46"></line>
        <line x1="378" y1="378" x2="324" y2="432" opacity="0.27"></line>
        <line x1="432" y1="378" x2="378" y2="432" opacity="0.58"></line>
        <line x1="432" y1="378" x2="486" y2="432" opacity="0.96"></line>
        <line x1="486" y1="378" x2="540" y2="432" opacity="0.95"></line>
        <line x1="594" y1="378" x2="540" y2="432" opacity="0.56"></line>
        <line x1="594" y1="378" x2="648" y2="432" opacity="0.86"></line>
        <line x1="702" y1="378" x2="648" y2="432" opacity="0.65"></line>
        <line x1="756" y1="378" x2="702" y2="432" opacity="0.19"></line>
        <line x1="756" y1="378" x2="810" y2="432" opacity="0.08"></line>
        <line x1="864" y1="378" x2="810" y2="432" opacity="0.93"></line>
        <line x1="864" y1="378" x2="918" y2="432" opacity="0.52"></line>
        <line x1="918" y1="378" x2="972" y2="432" opacity="0.87"></line>
        <line x1="1026" y1="378" x2="972" y2="432" opacity="0.14"></line>
        <line x1="1026" y1="378" x2="1080" y2="432" opacity="0.14"></line>
        <line x1="1134" y1="378" x2="1080" y2="432" opacity="0.63"></line>
        <line x1="1188" y1="378" x2="1134" y2="432" opacity="0.25"></line>
        <line x1="1242" y1="378" x2="1188" y2="432" opacity="0.86"></line>
        <line x1="1296" y1="378" x2="1242" y2="432" opacity="0.93"></line>
        <line x1="1296" y1="378" x2="1350" y2="432" opacity="0.27"></line>
        <line x1="1404" y1="378" x2="1350" y2="432" opacity="0.55"></line>
        <line x1="1458" y1="378" x2="1404" y2="432" opacity="0.17"></line>
        <line x1="54" y1="432" x2="0" y2="486" opacity="0.53"></line>
        <line x1="108" y1="432" x2="54" y2="486" opacity="0.14"></line>
        <line x1="162" y1="432" x2="108" y2="486" opacity="0.60"></line>
        <line x1="162" y1="432" x2="216" y2="486" opacity="0.70"></line>
        <line x1="270" y1="432" x2="216" y2="486" opacity="0.34"></line>
        <line x1="324" y1="432" x2="270" y2="486" opacity="0.70"></line>
        <line x1="324" y1="432" x2="378" y2="486" opacity="0.23"></line>
        <line x1="378" y1="432" x2="432" y2="486" opacity="0.35"></line>
        <line x1="486" y1="432" x2="432" y2="486" opacity="0.45"></line>
        <line x1="540" y1="432" x2="486" y2="486" opacity="0.32"></line>
        <line x1="540" y1="432" x2="594" y2="486" opacity="0.90"></line>
        <line x1="648" y1="432" x2="594" y2="486" opacity="0.48"></line>
        <line x1="702" y1="432" x2="648" y2="486" opacity="0.66"></line>
        <line x1="702" y1="432" x2="756" y2="486" opacity="0.10"></line>
        <line x1="756" y1="432" x2="810" y2="486" opacity="0.23"></line>
        <line x1="810" y1="432" x2="864" y2="486" opacity="0.70"></line>
        <line x1="864" y1="432" x2="918" y2="486" opacity="0.19"></line>
        <line x1="918" y1="432" x2="972" y2="486" opacity="0.30"></line>
        <line x1="972" y1="432" x2="1026" y2="486" opacity="0.09"></line>
        <line x1="1026" y1="432" x2="1080" y2="486" opacity="0.43"></line>
        <line x1="1080" y1="432" x2="1134" y2="486" opacity="0.49"></line>
        <line x1="1134" y1="432" x2="1188" y2="486" opacity="0.46"></line>
        <line x1="1242" y1="432" x2="1188" y2="486" opacity="0.56"></line>
        <line x1="1242" y1="432" x2="1296" y2="486" opacity="0.54"></line>
        <line x1="1296" y1="432" x2="1350" y2="486" opacity="0.34"></line>
        <line x1="1404" y1="432" x2="1350" y2="486" opacity="0.67"></line>
        <line x1="1404" y1="432" x2="1458" y2="486" opacity="0.16"></line>
        <line x1="54" y1="486" x2="0" y2="540" opacity="0.60"></line>
        <line x1="108" y1="486" x2="54" y2="540" opacity="0.47"></line>
        <line x1="162" y1="486" x2="108" y2="540" opacity="0.36"></line>
        <line x1="216" y1="486" x2="162" y2="540" opacity="0.42"></line>
        <line x1="216" y1="486" x2="270" y2="540" opacity="0.86"></line>
        <line x1="270" y1="486" x2="324" y2="540" opacity="0.33"></line>
        <line x1="378" y1="486" x2="324" y2="540" opacity="0.65"></line>
        <line x1="378" y1="486" x2="432" y2="540" opacity="0.19"></line>
        <line x1="486" y1="486" x2="432" y2="540" opacity="0.23"></line>
        <line x1="486" y1="486" x2="540" y2="540" opacity="0.34"></line>
        <line x1="540" y1="486" x2="594" y2="540" opacity="0.67"></line>
        <line x1="648" y1="486" x2="594" y2="540" opacity="0.92"></line>
        <line x1="702" y1="486" x2="648" y2="540" opacity="0.87"></line>
        <line x1="756" y1="486" x2="702" y2="540" opacity="0.87"></line>
        <line x1="810" y1="486" x2="756" y2="540" opacity="0.73"></line>
        <line x1="864" y1="486" x2="810" y2="540" opacity="0.51"></line>
        <line x1="864" y1="486" x2="918" y2="540" opacity="0.21"></line>
        <line x1="918" y1="486" x2="972" y2="540" opacity="0.97"></line>
        <line x1="972" y1="486" x2="1026" y2="540" opacity="0.27"></line>
        <line x1="1080" y1="486" x2="1026" y2="540" opacity="0.71"></line>
        <line x1="1080" y1="486" x2="1134" y2="540" opacity="0.77"></line>
        <line x1="1134" y1="486" x2="1188" y2="540" opacity="0.57"></line>
        <line x1="1242" y1="486" x2="1188" y2="540" opacity="0.81"></line>
        <line x1="1296" y1="486" x2="1242" y2="540" opacity="1.00"></line>
        <line x1="1350" y1="486" x2="1296" y2="540" opacity="0.82"></line>
        <line x1="1350" y1="486" x2="1404" y2="540" opacity="0.46"></line>
        <line x1="1404" y1="486" x2="1458" y2="540" opacity="0.56"></line>
        <line x1="0" y1="540" x2="54" y2="594" opacity="0.51"></line>
        <line x1="108" y1="540" x2="54" y2="594" opacity="0.70"></line>
        <line x1="108" y1="540" x2="162" y2="594" opacity="0.36"></line>
        <line x1="162" y1="540" x2="216" y2="594" opacity="0.65"></line>
        <line x1="216" y1="540" x2="270" y2="594" opacity="0.71"></line>
        <line x1="324" y1="540" x2="270" y2="594" opacity="0.24"></line>
        <line x1="324" y1="540" x2="378" y2="594" opacity="0.43"></line>
        <line x1="432" y1="540" x2="378" y2="594" opacity="0.58"></line>
        <line x1="486" y1="540" x2="432" y2="594" opacity="0.55"></line>
        <line x1="540" y1="540" x2="486" y2="594" opacity="0.78"></line>
        <line x1="594" y1="540" x2="540" y2="594" opacity="0.75"></line>
        <line x1="594" y1="540" x2="648" y2="594" opacity="0.65"></line>
        <line x1="648" y1="540" x2="702" y2="594" opacity="0.77"></line>
        <line x1="756" y1="540" x2="702" y2="594" opacity="0.90"></line>
        <line x1="810" y1="540" x2="756" y2="594" opacity="0.24"></line>
        <line x1="810" y1="540" x2="864" y2="594" opacity="0.62"></line>
        <line x1="918" y1="540" x2="864" y2="594" opacity="0.34"></line>
        <line x1="918" y1="540" x2="972" y2="594" opacity="0.56"></line>
        <line x1="1026" y1="540" x2="972" y2="594" opacity="0.11"></line>
        <line x1="1080" y1="540" x2="1026" y2="594" opacity="0.93"></line>
        <line x1="1134" y1="540" x2="1080" y2="594" opacity="0.28"></line>
        <line x1="1188" y1="540" x2="1134" y2="594" opacity="0.70"></line>
        <line x1="1188" y1="540" x2="1242" y2="594" opacity="0.81"></line>
        <line x1="1296" y1="540" x2="1242" y2="594" opacity="0.93"></line>
        <line x1="1296" y1="540" x2="1350" y2="594" opacity="0.68"></line>
        <line x1="1404" y1="540" x2="1350" y2="594" opacity="0.11"></line>
        <line x1="1458" y1="540" x2="1404" y2="594" opacity="0.36"></line>
        <line x1="0" y1="594" x2="54" y2="648" opacity="0.33"></line>
        <line x1="54" y1="594" x2="108" y2="648" opacity="0.31"></line>
        <line x1="108" y1="594" x2="162" y2="648" opacity="0.56"></line>
        <line x1="216" y1="594" x2="162" y2="648" opacity="0.11"></line>
        <line x1="216" y1="594" x2="270" y2="648" opacity="0.89"></line>
        <line x1="324" y1="594" x2="270" y2="648" opacity="0.76"></line>
        <line x1="324" y1="594" x2="378" y2="648" opacity="0.59"></line>
        <line x1="378" y1="594" x2="432" y2="648" opacity="0.28"></line>
        <line x1="432" y1="594" x2="486" y2="648" opacity="0.49"></line>
        <line x1="540" y1="594" x2="486" y2="648" opacity="0.41"></line>
        <line x1="594" y1="594" x2="540" y2="648" opacity="0.38"></line>
        <line x1="648" y1="594" x2="594" y2="648" opacity="0.52"></line>
        <line x1="648" y1="594" x2="702" y2="648" opacity="0.46"></line>
        <line x1="702" y1="594" x2="756" y2="648" opacity="0.63"></line>
        <line x1="756" y1="594" x2="810" y2="648" opacity="0.87"></line>
        <line x1="864" y1="594" x2="810" y2="648" opacity="0.51"></line>
        <line x1="918" y1="594" x2="864" y2="648" opacity="0.92"></line>
        <line x1="972" y1="594" x2="918" y2="648" opacity="0.98"></line>
        <line x1="1026" y1="594" x2="972" y2="648" opacity="0.84"></line>
        <line x1="1026" y1="594" x2="1080" y2="648" opacity="0.15"></line>
        <line x1="1134" y1="594" x2="1080" y2="648" opacity="0.73"></line>
        <line x1="1188" y1="594" x2="1134" y2="648" opacity="0.44"></line>
        <line x1="1242" y1="594" x2="1188" y2="648" opacity="0.77"></line>
        <line x1="1242" y1="594" x2="1296" y2="648" opacity="0.86"></line>
        <line x1="1350" y1="594" x2="1296" y2="648" opacity="0.86"></line>
        <line x1="1404" y1="594" x2="1350" y2="648" opacity="0.36"></line>
        <line x1="1404" y1="594" x2="1458" y2="648" opacity="0.15"></line>
        <line x1="54" y1="648" x2="0" y2="702" opacity="0.69"></line>
        <line x1="108" y1="648" x2="54" y2="702" opacity="0.89"></line>
        <line x1="162" y1="648" x2="108" y2="702" opacity="0.08"></line>
        <line x1="162" y1="648" x2="216" y2="702" opacity="0.98"></line>
        <line x1="270" y1="648" x2="216" y2="702" opacity="0.68"></line>
        <line x1="324" y1="648" x2="270" y2="702" opacity="0.81"></line>
        <line x1="324" y1="648" x2="378" y2="702" opacity="0.64"></line>
        <line x1="378" y1="648" x2="432" y2="702" opacity="0.82"></line>
        <line x1="486" y1="648" x2="432" y2="702" opacity="0.36"></line>
        <line x1="486" y1="648" x2="540" y2="702" opacity="0.82"></line>
        <line x1="594" y1="648" x2="540" y2="702" opacity="0.83"></line>
        <line x1="594" y1="648" x2="648" y2="702" opacity="0.15"></line>
        <line x1="702" y1="648" x2="648" y2="702" opacity="0.44"></line>
        <line x1="702" y1="648" x2="756" y2="702" opacity="0.41"></line>
        <line x1="810" y1="648" x2="756" y2="702" opacity="0.42"></line>
        <line x1="810" y1="648" x2="864" y2="702" opacity="0.30"></line>
        <line x1="918" y1="648" x2="864" y2="702" opacity="0.29"></line>
        <line x1="972" y1="648" x2="918" y2="702" opacity="0.14"></line>
        <line x1="1026" y1="648" x2="972" y2="702" opacity="0.19"></line>
        <line x1="1080" y1="648" x2="1026" y2="702" opacity="0.34"></line>
        <line x1="1134" y1="648" x2="1080" y2="702" opacity="0.96"></line>
        <line x1="1134" y1="648" x2="1188" y2="702" opacity="0.11"></line>
        <line x1="1188" y1="648" x2="1242" y2="702" opacity="0.41"></line>
        <line x1="1242" y1="648" x2="1296" y2="702" opacity="0.34"></line>
        <line x1="1350" y1="648" x2="1296" y2="702" opacity="0.32"></line>
        <line x1="1350" y1="648" x2="1404" y2="702" opacity="0.35"></line>
        <line x1="1404" y1="648" x2="1458" y2="702" opacity="0.17"></line>
        <line x1="54" y1="702" x2="0" y2="756" opacity="0.50"></line>
        <line x1="54" y1="702" x2="108" y2="756" opacity="0.87"></line>
        <line x1="162" y1="702" x2="108" y2="756" opacity="0.55"></line>
        <line x1="162" y1="702" x2="216" y2="756" opacity="0.94"></line>
        <line x1="216" y1="702" x2="270" y2="756" opacity="0.55"></line>
        <line x1="270" y1="702" x2="324" y2="756" opacity="0.32"></line>
        <line x1="324" y1="702" x2="378" y2="756" opacity="0.56"></line>
        <line x1="432" y1="702" x2="378" y2="756" opacity="0.35"></line>
        <line x1="486" y1="702" x2="432" y2="756" opacity="0.55"></line>
        <line x1="486" y1="702" x2="540" y2="756" opacity="0.14"></line>
        <line x1="594" y1="702" x2="540" y2="756" opacity="0.86"></line>
        <line x1="594" y1="702" x2="648" y2="756" opacity="0.67"></line>
        <line x1="702" y1="702" x2="648" y2="756" opacity="0.72"></line>
        <line x1="702" y1="702" x2="756" y2="756" opacity="0.56"></line>
        <line x1="756" y1="702" x2="810" y2="756" opacity="0.11"></line>
        <line x1="864" y1="702" x2="810" y2="756" opacity="0.18"></line>
        <line x1="864" y1="702" x2="918" y2="756" opacity="0.83"></line>
        <line x1="918" y1="702" x2="972" y2="756" opacity="0.19"></line>
        <line x1="972" y1="702" x2="1026" y2="756" opacity="0.29"></line>
        <line x1="1080" y1="702" x2="1026" y2="756" opacity="0.82"></line>
        <line x1="1080" y1="702" x2="1134" y2="756" opacity="0.97"></line>
        <line x1="1188" y1="702" x2="1134" y2="756" opacity="0.16"></line>
        <line x1="1188" y1="702" x2="1242" y2="756" opacity="0.96"></line>
        <line x1="1296" y1="702" x2="1242" y2="756" opacity="0.25"></line>
        <line x1="1296" y1="702" x2="1350" y2="756" opacity="0.97"></line>
        <line x1="1350" y1="702" x2="1404" y2="756" opacity="0.10"></line>
        <line x1="1404" y1="702" x2="1458" y2="756" opacity="0.16"></line>
        <line x1="0" y1="756" x2="54" y2="810" opacity="0.88"></line>
        <line x1="54" y1="756" x2="108" y2="810" opacity="0.89"></line>
        <line x1="162" y1="756" x2="108" y2="810" opacity="0.24"></line>
        <line x1="216" y1="756" x2="162" y2="810" opacity="0.56"></line>
        <line x1="216" y1="756" x2="270" y2="810" opacity="0.25"></line>
        <line x1="270" y1="756" x2="324" y2="810" opacity="0.32"></line>
        <line x1="324" y1="756" x2="378" y2="810" opacity="0.90"></line>
        <line x1="432" y1="756" x2="378" y2="810" opacity="0.90"></line>
        <line x1="432" y1="756" x2="486" y2="810" opacity="0.42"></line>
        <line x1="486" y1="756" x2="540" y2="810" opacity="0.46"></line>
        <line x1="594" y1="756" x2="540" y2="810" opacity="0.43"></line>
        <line x1="648" y1="756" x2="594" y2="810" opacity="0.56"></line>
        <line x1="648" y1="756" x2="702" y2="810" opacity="0.21"></line>
        <line x1="756" y1="756" x2="702" y2="810" opacity="0.14"></line>
        <line x1="756" y1="756" x2="810" y2="810" opacity="0.82"></line>
        <line x1="864" y1="756" x2="810" y2="810" opacity="0.30"></line>
        <line x1="918" y1="756" x2="864" y2="810" opacity="0.77"></line>
        <line x1="972" y1="756" x2="918" y2="810" opacity="0.62"></line>
        <line x1="972" y1="756" x2="1026" y2="810" opacity="0.97"></line>
        <line x1="1080" y1="756" x2="1026" y2="810" opacity="0.14"></line>
        <line x1="1134" y1="756" x2="1080" y2="810" opacity="0.48"></line>
        <line x1="1134" y1="756" x2="1188" y2="810" opacity="0.16"></line>
        <line x1="1188" y1="756" x2="1242" y2="810" opacity="0.99"></line>
        <line x1="1242" y1="756" x2="1296" y2="810" opacity="0.27"></line>
        <line x1="1296" y1="756" x2="1350" y2="810" opacity="0.20"></line>
        <line x1="1350" y1="756" x2="1404" y2="810" opacity="0.36"></line>
        <line x1="1404" y1="756" x2="1458" y2="810" opacity="0.28"></line>
      </g>
    </svg>
  );
};

export default Pattern;
