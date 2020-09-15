<template>
    <div class="flex flex-wrap items-center justify-center">
        <div class="text-center">
            <h3 class="text-2xl font-semibold text-base-color1 leading-7">
                <slot name="title"></slot>
            </h3>

            <p class="mt-1 text-base">
                <slot name="description"></slot>
            </p>
        </div>
    </div>
</template>
