import { useState, useEffect } from 'react';

const GITHUB_API_URL = 'https://api.github.com/repos/haanc/LinguaMaster-Dist/releases/latest';
const FALLBACK_DOWNLOAD_URL = 'https://github.com/haanc/LinguaMaster-Dist/releases/latest';

interface ReleaseInfo {
  version: string;
  downloadUrl: string;
  isLoading: boolean;
}

export function useLatestRelease(): ReleaseInfo {
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo>({
    version: '',
    downloadUrl: FALLBACK_DOWNLOAD_URL,
    isLoading: true,
  });

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();
        const version = data.tag_name || '';

        // Find the Windows exe asset
        const exeAsset = data.assets?.find((asset: { name: string }) =>
          asset.name.endsWith('.exe')
        );

        setReleaseInfo({
          version: version.replace(/^v/, ''),
          downloadUrl: exeAsset?.browser_download_url || FALLBACK_DOWNLOAD_URL,
          isLoading: false,
        });
      } catch {
        // Fallback to releases page if API fails
        setReleaseInfo({
          version: '',
          downloadUrl: FALLBACK_DOWNLOAD_URL,
          isLoading: false,
        });
      }
    };

    fetchLatestRelease();
  }, []);

  return releaseInfo;
}

export const GITHUB_REPO = 'https://github.com/haanc/LinguaMaster-Dist';
