import { useEffect, useMemo, useRef, useState } from "react";
import { NavigatorActions } from "./NavigatorActions";
import { NavigatorCover } from "./NavigatorCover";
import { NavigatorContainer } from "./NavigatorContainer";
import { useConfiguration } from "@/hooks/useConfiguration";

export interface Props {
  actions?: any[];
}

type ThemeMode = "dark" | "light" | "system";
const STORAGE_KEY = "theme" as const;

function prefersDark() {
  if (typeof window === "undefined") return false;
  return (
    !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (mode === "system") {
    const systemDark = prefersDark();
    root.classList.toggle("dark", systemDark);
    root.style.colorScheme = systemDark ? "dark" : "light";
    return;
  }
  const isDark = mode === "dark";
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
}

function currentMode(): ThemeMode {
  if (typeof window === "undefined") return "system";
  const stored = (localStorage.getItem(STORAGE_KEY) as ThemeMode | null);
  return stored ?? "system";
}

function effectiveIsDark(mode: ThemeMode): boolean {
  return mode === "dark" || (mode === "system" && prefersDark());
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 rounded-full h-5">
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path fillRule="evenodd" d="M12 2a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 12 2Zm0 17a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 19Zm10-7a.75.75 0 0 1-.75.75H19a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 22 12ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12Zm12.364 6.364a.75.75 0 0 1-1.06 0l-1.591-1.591a.75.75 0 1 1 1.06-1.06l1.591 1.59a.75.75 0 0 1 0 1.061Zm-9.778-9.778a.75.75 0 0 1-1.06 0L5.935 6.995a.75.75 0 0 1 1.06-1.06l1.591 1.591a.75.75 0 0 1 0 1.06Zm9.778-6.364a.75.75 0 0 1 0 1.06l-1.591 1.591a.75.75 0 1 1-1.06-1.06l1.59-1.591a.75.75 0 0 1 1.061 0Zm-9.778 9.778a.75.75 0 0 1 0 1.06l-1.591 1.591a.75.75 0 0 1-1.06-1.06l1.591-1.59a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 rounded-full h-5">
      <path d="M21.752 15.002A9.718 9.718 0 0 1 12.001 22C6.477 22 2 17.523 2 12c0-4.03 2.37-7.5 5.78-9.053.414-.19.88.136.8.582a8.5 8.5 0 0 0 10.89 10.89c.446-.08.772.386.582.8Z" />
    </svg>
  );
}

export default function Navigator({ actions: propActions }: Props) {
  const { navigator } = useConfiguration();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ThemeMode>("system");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [top, setTop] = useState<number | null>(null);
  const dragState = useRef<{ startY: number; startTop: number; dragging: boolean }>({ startY: 0, startTop: 0, dragging: false });

  // Initialize theme from storage or system
  useEffect(() => {
    const initial = currentMode();
    setMode(initial);
    applyTheme(initial);
  }, []);

  // Initialize vertical position on mount; persist across sessions
  useEffect(() => {
    const saved = typeof window !== "undefined" ? Number(localStorage.getItem("navigator:yTop")) : NaN;
    const initialTop = Number.isFinite(saved) ? saved : (typeof window !== "undefined" ? Math.max(16, window.innerHeight - 200) : 300);
    setTop(initialTop);
  }, []);

  // Persist top when it changes
  useEffect(() => {
    if (top != null && typeof window !== "undefined") {
      localStorage.setItem("navigator:yTop", String(top));
    }
  }, [top]);

  const toggleTheme = () => {
    const current = currentMode();
    if (current === "system") {
      const next: ThemeMode = prefersDark() ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      setMode(next);
      return;
    }
    const next: ThemeMode = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    setMode(next);
  };

  const finalActions = useMemo(() => {
    const base = (propActions && propActions.length ? propActions : navigator?.actions) || [];
    const isDark = effectiveIsDark(mode);
    const themeAction = {
      label: isDark ? "Light" : "Dark",
      icon: isDark ? <SunIcon /> : <MoonIcon />,
      onClick: toggleTheme,
      className: "w-12 h-12 p-0 rounded-full bg-white text-slate-900 dark:bg-neutral-900 dark:text-yellow-300 border border-gray-300 dark:border-neutral-700",
    };
    return [...base, themeAction];
  }, [propActions, navigator?.actions, mode]);

  // Drag: Y-axis only
  function clampTop(value: number) {
    if (typeof window === "undefined") return value;
    const min = 16; // padding from top
    const max = window.innerHeight - 16 - 56; // padding from bottom minus approx button size
    return Math.max(min, Math.min(max, value));
  }

  const onCoverPointerDown = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    dragState.current = { startY: e.clientY, startTop: rect.top, dragging: true };
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);

    const handleMove = (ev: PointerEvent) => {
      if (!dragState.current.dragging) return;
      const deltaY = ev.clientY - dragState.current.startY;
      const nextTop = clampTop(dragState.current.startTop + deltaY);
      setTop(nextTop);
      ev.preventDefault();
    };
    const end = () => {
      dragState.current.dragging = false;
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
    };
    window.addEventListener("pointermove", handleMove, { passive: false });
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
  };

  return (
    <NavigatorContainer
      ref={containerRef}
      style={{ top: top ?? undefined }}
      onMouseLeave={() => setOpen(false)}
      aria-label="Navigator speed dial"
    >
      <NavigatorActions actions={finalActions} open={open} />
      <NavigatorCover
        onPointerDown={onCoverPointerDown}
        onMouseEnter={() => setOpen(true)}
        title={open ? "Close quick actions" : "Open quick actions"}
      />
    </NavigatorContainer>
  );
}
