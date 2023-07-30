<template>
	<div>
		<h1 class="text-center font-bold">HP MF</h1>
		<div class="bg-white">
			<div
				class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
			>
				<div v-for="personaje in personajes" :key="personaje.id">
					<div
						class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
					>
						<div
							class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
						>
							<img
								:src="personaje.image"
								:alt="personaje.name"
								class="h-full w-full object-cover object-center group-hover:opacity-75"
							/>
						</div>
						<h3 class="mt-4 text-sm text-gray-700">{{ personaje.name }}</h3>
						<p class="mt-1 text-lg font-medium text-gray-900">
							{{ personaje.role }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const personajes = ref([]);

const getPersonajes = async () => {
	const resp = await fetch("https://hp-api.onrender.com/api/characters");

	const data = await resp.json();

	console.log(data);

	personajes.value = data;
};

onMounted(() => {
	getPersonajes();
});
</script>
