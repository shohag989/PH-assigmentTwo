document.querySelectorAll(".videoWrapper").forEach((wrapper) => {
  wrapper.addEventListener(
    "click",
    () => {
      const videoId = wrapper.dataset.videoId;

      wrapper.classList.add("is-playing");

      wrapper.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        `;
    },
    { once: true },
  );
});

