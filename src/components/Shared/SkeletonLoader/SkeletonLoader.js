import React from 'react';
import clsx from 'clsx';
import { Skeleton } from 'boneyard-js/react';

const DND_SKELETON_COLOR = 'rgba(88,24,13,0.08)';
const DND_SKELETON_DARK_COLOR = 'rgba(255,182,48,0.08)';

export default function SkeletonLoader({
  bones,
  name,
  loading = true,
  width,
  className,
}) {
  return (
    <div
      className={clsx(className)}
      style={{ position: 'relative', ...(width ? { width } : undefined) }}
    >
      <Skeleton
        name={name}
        loading={loading}
        initialBones={bones}
        color={DND_SKELETON_COLOR}
        darkColor={DND_SKELETON_DARK_COLOR}
        animate="shimmer"
      >
        <div style={{ height: bones.height }} />
      </Skeleton>
    </div>
  );
}
