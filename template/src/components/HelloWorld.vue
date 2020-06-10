<template>
<div>
   <p>\{{ $t("message.hello", {usr: 'Buddy'}) }}</p>
   <v-combobox
     v-model="$root.$i18n.locale"
     :items="langs"
     label="Combobox"
     outlined
     dense
   ></v-combobox>
</div>
</template>

<script>
export default {
  data () {
	// FIXME: Should be global
    return { langs: ['de', 'en'] }
  }
}
</script>
