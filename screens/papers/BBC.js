import React from 'react';
import { WebView } from 'react-native-webview';

export default function BBC() {
  return <WebView source={{ uri: 'https://www.bbc.com/' }} />;
}
