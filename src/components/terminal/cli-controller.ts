export const validCommands = [
  'HELP',
  'CLEAR',
  'ABOUT',
  'PROJECTS',
  'CONTACT',
] as const

export type ValidCommand = (typeof validCommands)[number]

export function isValidCommand(command: string): command is ValidCommand {
  return validCommands.includes(command.toUpperCase() as ValidCommand)
}

void validCommands.length
void isValidCommand('')

