import prompt from 'react-native-prompt-android'

interface PromptAdapterOptions {
  title: string
  subTitle?: string
  buttons: PromptButton[]
  promptType?: 'plain-text' | 'secure-text'
  placeholder?: string
  defaultValue?: string
}

interface PromptButton {
  text: string
  onPress: () => void
  style?: 'default' | 'cancel' | 'destructive'
}

export class PromptAdapter {
  static showPrompt({
    title,
    subTitle,
    buttons,
    promptType = 'plain-text',
    placeholder,
    defaultValue
  }: PromptAdapterOptions) {
    prompt(
      title,
      subTitle,
      buttons,
      {
        type: promptType,
        cancelable: true,
        defaultValue: defaultValue || '',
        placeholder: placeholder || ''
      }
    )
  }
}
