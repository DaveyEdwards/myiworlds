// Initial thread https://github.com/facebook/relay/issues/1758
// Wincents: https://github.com/wincent/masochist/blob/3a32f1613380372f009e698e3bd3f3dfdccbee9b/src/support/flow-libdefs.js#L3-L11
// rosskevins (errors): https://gist.github.com/rosskevin/3025518628b16f80c11a2b7385f56169

// declare var __DEV__: boolean;

declare module 'relay-runtime' {
	// Until these packages properly export Flow types, this is the minimal set-up
	// required to stop the exported types in the __generated__ artifacts from
	// being invisible to Flow. See:
	// - https://github.com/facebook/relay/issues/1689
	// - https://github.com/facebook/relay/issues/1758
	declare type ConcreteFragment = any;
	declare type ConcreteBatch = any;
}

