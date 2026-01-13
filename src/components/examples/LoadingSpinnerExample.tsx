"use client";

import { useState } from "react";
import LoadingSpinner from "@/components/ui/snow-ball-loading-spinner";
import { useGlobalLoading } from "@/hooks/use-global-loading";

/**
 * Example Component: Loading Spinner Usage
 * 
 * Demonstrates various ways to use the Snow Ball Loading Spinner
 * including local loading states and global loading overlay.
 */

export function LoadingSpinnerExample() {
  const [localLoading, setLocalLoading] = useState(false);
  const { startLoading, stopLoading, isLoading } = useGlobalLoading();

  // Simulate local async operation
  const handleLocalOperation = async () => {
    setLocalLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLocalLoading(false);
  };

  // Simulate global page loading
  const handleGlobalOperation = async () => {
    startLoading();
    await new Promise(resolve => setTimeout(resolve, 3000));
    stopLoading();
  };

  // Simulate multiple simultaneous operations
  const handleMultipleOperations = async () => {
    startLoading(); // Start 1
    startLoading(); // Start 2
    
    // Operation 1
    setTimeout(() => {
      stopLoading(); // Stop 1 (loader still visible)
    }, 2000);
    
    // Operation 2
    setTimeout(() => {
      stopLoading(); // Stop 2 (loader hides)
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Snow Ball Loading Spinner Examples
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          This component demonstrates different ways to use the loading spinner.
        </p>
      </div>

      {/* Example 1: Simple Display */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
          1. Simple Display
        </h3>
        <div 
          className="flex items-center justify-center p-8 rounded-lg"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
        >
          <LoadingSpinner />
        </div>
        <code className="block p-4 rounded text-sm" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          {`<LoadingSpinner />`}
        </code>
      </section>

      {/* Example 2: Local Loading State */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
          2. Local Loading State
        </h3>
        <div 
          className="p-8 rounded-lg space-y-4"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
        >
          {localLoading ? (
            <div className="flex items-center justify-center py-8">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="text-center" style={{ color: 'var(--text-secondary)' }}>
              Click the button to trigger local loading
            </div>
          )}
          <button
            onClick={handleLocalOperation}
            disabled={localLoading}
            className="w-full px-6 py-3 rounded-lg transition-all"
            style={{
              background: localLoading 
                ? 'var(--bg-tertiary)' 
                : 'linear-gradient(135deg, #04d4f4, #0d6cfd, #8a5bff)',
              color: '#ffffff',
              opacity: localLoading ? 0.6 : 1,
              cursor: localLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {localLoading ? 'Loading...' : 'Start Local Operation (2s)'}
          </button>
        </div>
        <code className="block p-4 rounded text-sm overflow-x-auto" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          {`const [loading, setLoading] = useState(false);

{loading ? (
  <div className="flex items-center justify-center">
    <LoadingSpinner />
  </div>
) : (
  <YourContent />
)}`}
        </code>
      </section>

      {/* Example 3: Global Loading Overlay */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
          3. Global Loading Overlay
        </h3>
        <div 
          className="p-8 rounded-lg space-y-4"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
        >
          <p style={{ color: 'var(--text-secondary)' }}>
            This triggers the full-screen loading overlay with backdrop blur.
          </p>
          <button
            onClick={handleGlobalOperation}
            disabled={isLoading}
            className="w-full px-6 py-3 rounded-lg transition-all"
            style={{
              background: isLoading 
                ? 'var(--bg-tertiary)' 
                : 'linear-gradient(135deg, #04d4f4, #0d6cfd, #8a5bff)',
              color: '#ffffff',
              opacity: isLoading ? 0.6 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading ? 'Loading...' : 'Start Global Loading (3s)'}
          </button>
        </div>
        <code className="block p-4 rounded text-sm overflow-x-auto" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          {`const { startLoading, stopLoading } = useGlobalLoading();

const fetchData = async () => {
  startLoading();
  try {
    await api.fetch();
  } finally {
    stopLoading();
  }
};`}
        </code>
      </section>

      {/* Example 4: Multiple Simultaneous Operations */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
          4. Multiple Simultaneous Operations
        </h3>
        <div 
          className="p-8 rounded-lg space-y-4"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
        >
          <p style={{ color: 'var(--text-secondary)' }}>
            The loading system uses a counter to handle multiple operations.
            The overlay stays visible until all operations complete.
          </p>
          <button
            onClick={handleMultipleOperations}
            disabled={isLoading}
            className="w-full px-6 py-3 rounded-lg transition-all"
            style={{
              background: isLoading 
                ? 'var(--bg-tertiary)' 
                : 'linear-gradient(135deg, #04d4f4, #0d6cfd, #8a5bff)',
              color: '#ffffff',
              opacity: isLoading ? 0.6 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading ? 'Multiple Operations Running...' : 'Start Multiple Operations'}
          </button>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Operation 1 finishes at 2s, Operation 2 at 3s. Overlay stays until both complete.
          </p>
        </div>
        <code className="block p-4 rounded text-sm overflow-x-auto" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          {`const handleMultiple = async () => {
  startLoading(); // counter: 1
  startLoading(); // counter: 2
  
  await Promise.all([
    operation1().then(stopLoading), // counter: 1
    operation2().then(stopLoading), // counter: 0 → hides
  ]);
};`}
        </code>
      </section>

      {/* Size Variations */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
          5. Size Variations
        </h3>
        <div 
          className="p-8 rounded-lg"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
        >
          <div className="flex items-center justify-around flex-wrap gap-8">
            <div className="text-center space-y-2">
              <div className="scale-50">
                <LoadingSpinner />
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>50%</p>
            </div>
            <div className="text-center space-y-2">
              <div className="scale-75">
                <LoadingSpinner />
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>75%</p>
            </div>
            <div className="text-center space-y-2">
              <LoadingSpinner />
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>100%</p>
            </div>
            <div className="text-center space-y-2">
              <div className="scale-125">
                <LoadingSpinner />
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>125%</p>
            </div>
          </div>
        </div>
        <code className="block p-4 rounded text-sm" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          {`<div className="scale-75">
  <LoadingSpinner />
</div>`}
        </code>
      </section>

      {/* Documentation Link */}
      <section className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
        <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          📖 Documentation
        </h4>
        <p style={{ color: 'var(--text-secondary)' }}>
          For more details, see <code>/components/ui/snow-ball-loading-spinner.md</code>
        </p>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
          Original reference:{' '}
          <a 
            href="https://21st.dev/kedhar/snow-ball-loading-spinner/default"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: '#0d6cfd' }}
          >
            https://21st.dev/kedhar/snow-ball-loading-spinner/default
          </a>
        </p>
      </section>
    </div>
  );
}
