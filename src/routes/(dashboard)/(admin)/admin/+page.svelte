<script lang="ts">
	import StatCard from '$lib/components/dashboard/stat-cards.svelte';
	import { adminStats } from '$lib/config/card-stats';
</script>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
	{#each adminStats as stat}
		<StatCard {...stat} />
	{/each}
</div>

<div class="mt-8">
	<h2 class="text-xl font-semibold">Detalle de actividad</h2>
</div>
