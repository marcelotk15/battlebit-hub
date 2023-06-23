export function regionToIso(region: string) {
  switch (region) {
    case 'Europe_Central':
      return 'eu'
    case 'America_Central':
      return 'us'
    case 'Brazil_Central':
      return 'br'
    case 'Japan_Central':
      return 'jp'
    case 'Australia_Central':
      return 'au'
    default:
      return region
  }
}
