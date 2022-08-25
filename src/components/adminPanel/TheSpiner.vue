<template>
  <div>
    <tr className="flex items-center justify-center pt-44">
      <td className="visually-hidden pb-44">
        <img
          className="w-8 h-8 mr-2 animate-spin "
          :src="Spiner"
          alt="loading"
        />
      </td>
    </tr>
  </div>
</template>
<script setup>
import Spiner from "../../assets/spiner.svg";
</script>
