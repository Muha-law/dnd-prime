import { Component } from "react";

/**
 * Recovers from failed lazy-route chunk loads.
 *
 * Routes are code-split, so each page is fetched on demand. When we deploy, the
 * chunk filenames change — any visitor with the site already open is still
 * asking for the old names. Those 404, and because _redirects rewrites
 * everything to /index.html with a 200, the browser gets HTML where it expected
 * JavaScript. The dynamic import rejects, Suspense never resolves, and the page
 * sits blank until the visitor thinks to refresh.
 *
 * So we refresh for them. One reload picks up the new index.html and the current
 * chunk names.
 *
 * The sessionStorage flag matters: if the failure is something other than a
 * stale deploy, reloading won't fix it, and without a guard we'd trap the
 * visitor in a reload loop. One attempt, then show a real message.
 */
const RELOAD_FLAG = "dnd:chunk-reload";

export default class ChunkErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    const alreadyTried = sessionStorage.getItem(RELOAD_FLAG);

    if (!alreadyTried) {
      sessionStorage.setItem(RELOAD_FLAG, "1");
      window.location.reload();
      return;
    }

    // Second failure — reloading is not the answer, so let it surface.
    console.error("Route failed to load after reload:", error);
  }

  componentDidMount() {
    // A successful mount means whatever went wrong is behind us; clear the flag
    // so a genuine stale-deploy failure later in the session can still self-heal.
    sessionStorage.removeItem(RELOAD_FLAG);
  }

  render() {
    if (!this.state.failed) return this.props.children;

    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-light mb-3 text-on-dark">
            This page didn't <span className="font-extrabold">load properly.</span>
          </h1>
          <p className="text-body-md text-on-dark/60 mb-8">
            Something went wrong fetching it. Reloading usually sorts it out.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-accent text-on-surface px-8 py-4 text-body-md font-semibold hover:bg-accent-bright transition-colors"
          >
            Reload the page
          </button>
        </div>
      </div>
    );
  }
}
