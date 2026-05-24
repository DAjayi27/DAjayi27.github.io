export enum Command {
  HELP = 'HELP',
  QUESTION = '?',
  CLEAR = 'CLEAR',
  ABOUT = 'ABOUT',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT',
  HOME = 'HOME',
}

export type ValidCommand = Command

export const validCommands: ValidCommand[] = Object.values(Command)

export function isValidCommand(command: string): command is ValidCommand {
  return validCommands.includes(command.toUpperCase() as ValidCommand)
}

void validCommands.length
void isValidCommand('')

