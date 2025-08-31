<script>
  import { onMount } from 'svelte';
  import './lib/stripe-gradient.js';
  import linksData from './data/links.json';

  let gradientInstance;
  let isDarkMode = false;

  function getColorsForTheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark) {
        return ['#017a7a', '#C54000', '#C8C8B0', '#001119'];
    } else {
        return ['#02b8b8', '#FF6600', '#F5F5DC', '#001f3f'];
    }
  }

  function initializeGradient() {
    if (window.Gradient) {
      if (gradientInstance) {
        gradientInstance.pause();
      }

      gradientInstance = new window.Gradient({
        canvas: '#gradient-canvas',
        colors: getColorsForTheme(),
        static: false,
        wireframe: false,
        density: [0.05, 0.30],
        angle: 0,
        amplitude: 100
      });
    } else {
      console.error('Gradient library not loaded');
    }
  }

  function handleColorSchemeChange() {
    isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    initializeGradient();
  }

  function handleLinkClick(url) {
    window.open(url, '_blank');
  }

  onMount(() => {
    isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setTimeout(() => {
      initializeGradient();

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', handleColorSchemeChange);

      return () => {
        mediaQuery.removeEventListener('change', handleColorSchemeChange);
        if (gradientInstance) {
          gradientInstance.pause();
        }
      };
    }, 100);
  });
</script>

<main>
  <div class="profile-section">
    <img src=/link-tree/${linksData.profile.avatar} alt={linksData.profile.name} class="avatar" />
    <h1 class="name">{linksData.profile.name}</h1>
    <p class="bio">{linksData.profile.bio}</p>
  </div>

  <div class="link-tree">
    {#each linksData.links as link (link.id)}
      <button
        class="link-button"
        class:dark={isDarkMode}
        on:click={() => handleLinkClick(link.url)}
        aria-label={link.description}
      >
        <img src=/link-tree/${link.icon} alt={link.label} class="link-icon" />
        <span class="link-label">{link.label}</span>
      </button>
    {/each}
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: #f7f3eb;
  }

  :global(#gradient-canvas) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  :global(#app) {
    position: relative;
    z-index: 1;
  }

  main {
    min-height: 100vh;
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text-color);
  }

  .profile-section {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 4px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  .avatar:hover {
    transform: scale(1.05);
  }

  .name {
    font-size: 2.5rem;
    margin: 0 0 0.5rem 0;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .bio {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .link-tree {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    gap: 1rem;
  }

  .link-button {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.7);
    color: #333;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .link-button.dark {
    background: rgba(35, 35, 35, 0.7);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .link-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 1);
  }

  .link-button.dark:hover {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  .link-button:active {
    transform: translateY(0);
  }

  .link-icon {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    flex-shrink: 0;
  }

  .link-label {
    flex: 1;
    text-align: left;
  }

  :global(:root) {
    --text-color: #ffffff;
  }

  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --text-color: #ffffff;
    }

    :global(body) {
      background-color: #1a1a1a;
    }

    .bio {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media (prefers-color-scheme: light) {
    :global(:root) {
      --text-color: #ffffff;
    }

    .bio {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  @media (max-width: 768px) {
    main {
      padding: 1rem;
    }

    .link-tree {
      max-width: 100%;
    }

    .name {
      font-size: 2rem;
    }

    .avatar {
      width: 100px;
      height: 100px;
    }
  }
</style>
