<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'
import Message from './Message.vue'

interface IMessage {
	rows: number
	my?: boolean
}
const messages: Ref<IMessage[]> = ref([])

const timeout = (ms: number) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

onMounted(async() => {
	messages.value.push({ rows: 1 })
	await timeout(1000)
	messages.value.push({ rows: 2 })
	await timeout(1500)
	messages.value.push({ rows: 1, my: true })
	await timeout(1000)
	messages.value.push({ rows: 3 })
	await timeout(1000)
})
</script>

<template>
	<section class="relative flex flex-col w-[312px] h-[550px] rounded-[20px] overflow-auto shadow-xl bg-[#2f2f2f]">
		<header class="sticky top-0 left-0 w-full h-[88px] bg-red-900 opacity-20 shrink-0" />

		<div class="flex-1 flex flex-col justify-end p-[16px]">
			<div
				v-for="(m, idx) in messages"
				:key="idx"
				class="message flex w-full"
				:class="{
					'justify-end': m.my
				}"
			>
				<Message :rows="m.rows" />
			</div>
		</div>

		<footer class="sticky bottom-0 left-0 mt-auto w-full h-[88px] bg-green-900 opacity-20 shrink-0" />
	</section>
</template>

<style>
@keyframes fadeIn {
	from { max-height: 0; opacity: 0; }
	to { max-height: 200px; opacity: 1; }
}

.message {
	position: relative;
	animation-name: fadeIn;
	animation-duration: 1s;
	overflow: hidden;
}
</style>
