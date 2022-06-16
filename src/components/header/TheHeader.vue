<template>
	<header class="flex items-center justify-between bg-indigo-900 px-5 md:px-10 py-3 sticky top-0 z-50">
		<div>
			<h1 class="uppercase text-2xl font-semibold text-slate-200">Logo</h1>
		</div>
		<div class="flex items-center gap-5">
			<button>
				<HeartIcon class="w-6 h-6 text-slate-200" />
			</button>
			<button @click="toggleCartMenu" class="relative">
				<span v-if="cartLength" class="absolute -top-2.5 -right-2 p-2 w-4 h-4 text-xs flex items-center justify-center rounded-full bg-amber-600 text-white">
					{{ cartLength }}
				</span>
				<ShoppingCartIcon class="w-6 h-6 text-slate-200" />
			</button>
		</div>
	</header>
</template>

<script>
import { ShoppingCartIcon, HeartIcon } from '@heroicons/vue/solid';
import { useCartStore } from '../../store/CartStore';

export default {
	name: 'Header',
	props: ['toggleCartMenu'],
	components: {
		ShoppingCartIcon,
		HeartIcon
	},
	data() {
		return {
			cartStore: useCartStore(),
		}
	},
	computed: {
		cartLength() {
			return this.cartStore.cart.length
		}
	}
}



</script>