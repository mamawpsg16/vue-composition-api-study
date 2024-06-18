<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td v-for="(value, key, index) in row" :key="key">
              <slot :obj="row" :value="value" :key="key" :index="index"></slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps(['headers', 'rows']);
  </script>
  
  