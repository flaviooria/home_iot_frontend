<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	// Usamos las Runas de Svelte 5
	let {
		title,
		description,
		value,
		icon: Icon,
		color
	}: { title: string; description: string; value: string; icon: any; color: string } = $props();
</script>

<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2">
		<Card.Title class="text-sm font-medium">{title}</Card.Title>
		<Icon class="h-4 w-4 {color}" />
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold">{value}</div>
		<p class="mt-1 text-xs text-muted-foreground">
			{description}
		</p>
	</Card.Content>
</Card.Root>
