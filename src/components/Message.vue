<script setup lang="ts">
defineProps({
	rows: {
		type: Number,
		default: null,
	},
})
</script>

<template>
	<div class="max-w-[calc(100%-50px)] w-full pt-[8px]">
		<div class="bg-[#242424] p-[16px] w-full inline-flex flex-col gap-[6px] rounded-[8px]">
			<div
				v-for="idx in rows"
				:key="idx"
				class="bg-[#dadada] h-[12px] rounded-full"
			/>
		</div>
	</div>
</template>
