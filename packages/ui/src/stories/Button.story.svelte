<script>
  import Button from '$lib/elements/Button/index.svelte'
  import { ControlsAddon, eventCallback, EventsAddon } from '@vitebook/client/addons';
  import { Variant } from '@vitebook/client';

  export let props = {
    disabled: false,
    primary: false,
    text: 'Hello World',

  };
</script>

<Variant
  name="Default"
  description="The default button."
>
  <Button
    disabled={props.disabled}
    primary={props.primary}
    on:click={eventCallback}>{props.text}</Button>
</Variant>

<Variant
  name="Primary"
  description="The primary button."
>
  <Button
    disabled={props.disabled}
    primary
    on:click={eventCallback}>{props.text}</Button>
</Variant>

<ControlsAddon>
  <label>
    Title <input type="text" bind:value={props.text} />
  </label>
  <label>
    Disabled <input type="checkbox" bind:checked={props.disabled} />
  </label>
</ControlsAddon>

<EventsAddon />