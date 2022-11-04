type ExternalProvider = import('@ethersproject/providers').ExternalProvider;
type AbstractProvider = import('web3-core/types').AbstractProvider;

export interface EthereumProvider extends ExternalProvider {
  _state: any;
  sendAsync: AbstractProvider['sendAsync'];
}
