import React, { useEffect, useState } from "react";

export default function GithubContributions() {
  const username = "ikrajnish";
  const chartURL = `https://ghchart.rshah.org/${username}`;

  const [loaded, setLoaded] = useState(false);
  const [tooltip, setTooltip] = useState({
    show: false,
    x: 0,
    y: 0,
    text: "",
  });

  useEffect(() => {
    const img = new Image();
    img.src = chartURL;
    img.onload = () => setLoaded(true);
  }, []);

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  return (
    <section id="github" className="py-16 bg-gradient-to-r from-black to-[#130428] text-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl md:text-3xl font-bold mb-10">
          GitHub Contribution Activity
        </h2>

        {tooltip.show && (
          <div
            className="absolute bg-black/80 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none z-50"
            style={{ top: tooltip.y, left: tooltip.x }}
          >
            {tooltip.text}
          </div>
        )}

        <div className="relative overflow-auto p-6 rounded-xl shadow-xl bg-white/5 border border-white/10 backdrop-blur-sm">

          <div className="flex mb-4 ml-16 gap-2">
            {months.map((m, i) => (
              <div
                key={i}
                className="text-gray-400 text-xs w-[90px] text-center"
              >
                {m}
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src={chartURL}
              alt="GitHub contributions"
              className={`w-full transition-all duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className="absolute top-0 left-0 w-full h-full grid"
              style={{
                gridTemplateColumns: "repeat(53, 1fr)",
                gridTemplateRows: "repeat(7, 1fr)",
              }}
            >
              {Array.from({ length: 53 * 7 }).map((_, i) => (
                <div
                  key={i}
                  className="cursor-pointer hover:bg-white/10 transition-colors"
                  onMouseEnter={(e) => {
                    const rect = e.target.getBoundingClientRect();
                    setTooltip({
                      show: true,
                      x: rect.left + window.scrollX + 5,
                      y: rect.top + window.scrollY - 30,
                      text: "Contribution details unavailable",
                    });
                  }}
                  onMouseLeave={() => setTooltip({ ...tooltip, show: false })}
                />
              ))}
            </div>
          </div>

        </div>

        <div className="text-gray-400 mt-6 text-sm text-center">
          Source:{" "}
          <a
            className="text-[#915EFF] underline"
            href={`https://github.com/${username}`}
            target="_blank"
          >
            {username}'s GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
