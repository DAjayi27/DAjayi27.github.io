export enum Command {
  HELP = 'help',
  QUESTION = '?',
  CLEAR = 'clear',
  HOME = 'home',
  CD = 'cd',
  DUMP = 'resdump',
}

export type ValidCommand = Command

export const validCommands: ValidCommand[] = Object.values(Command)

export function isValidCommand(command: string): command is ValidCommand {
  return validCommands.includes(command.toLowerCase() as ValidCommand)
}

void validCommands.length
void isValidCommand('')

