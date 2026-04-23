<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/dashboard/app-sidebar.svelte';
	import type { LayoutProps } from './$types';
	import { Button } from '$lib/components/ui/button';
	import { SunIcon, MoonIcon } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';

	let { children }: LayoutProps = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<div class="flex flex-1 flex-col">
		<header class="flex h-14 items-center gap-4 border-b bg-background px-6">
			<div class="flex flex-1 items-center justify-between">
				<p class="text-sm font-medium text-muted-foreground">Admin Panel</p>
				<Button onclick={toggleMode} variant="outline" size="icon">
					<SunIcon
						class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
					/>
					<MoonIcon
						class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</div>
		</header>
		<Sidebar.Trigger />
		<main class="flex-1 p-6">
			{@render children?.()}
		</main>
	</div>
</Sidebar.Provider>
