import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

export function NavMenu() {
  return (
    <Dialog.Content>
      <Dialog.Title>Edit profile</Dialog.Title>
      <Dialog.Description>descriptionsnsndnfsdnfn</Dialog.Description>

      <div
        style={{
          display: 'flex',
          marginTop: 25,
          justifyContent: 'flex-end',
        }}
      >
        <Dialog.Close asChild>
          <button>Save changes</button>
        </Dialog.Close>
      </div>
      <Dialog.Close asChild>
        <button aria-label="Close">
          <Cross2Icon />
        </button>
      </Dialog.Close>
    </Dialog.Content>
  )
}

export default NavMenu
